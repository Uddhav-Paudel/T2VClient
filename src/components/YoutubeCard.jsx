import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function YoutubeCard({
  url,
  thumbnailUrl,
  title,
  channelName,
  viewerCount,
  yearUpload,
  isTestUrl,
}) {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      <div>
        {!isLoaded && (
          <div className="relative">
            <img
              src={thumbnailUrl}
              alt="Loading Poster"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50 text-white">
              <FaSpinner className="animate-spin size-8 rounded-full"></FaSpinner>
            </div>
          </div>
        )}

        <video
          controls
          width="100%"
          src={url}
          poster={thumbnailUrl}
          className={`${
            !isTestUrl ? "hidden aspect-video" : "aspect-video"
          } cursor-pointer`}
        ></video>
        <iframe
          width="100%"
          height={300}
          src={url}
          title="The Cell Membrane"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => {
            setTimeout(() => {
              setIsLoaded(true);
            }, 1000);
          }}
          className={`${!isLoaded || isTestUrl ? "hidden" : ""} cursor-pointer`}
        ></iframe>
        <div className="flex">
          <div className="flex-col w-full group cursor-pointer relative">
            <span className="hidden group-hover:block absolute left-0 bottom-full mb-1 w-max max-w-xs bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-1">
              {title}
            </span>
            <h1 className="truncate whitespace-nowrap cursor-pointer">
              <strong className="">{title}</strong>
            </h1>

            <div className="flex">
              <span className="italic me-primary underline cursor-pointer">
                {/* {channelName} */}
              </span>
              <span className="flex-1">
                <strong className="me-primary">{viewerCount} views</strong>
                {/* {yearUpload} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
