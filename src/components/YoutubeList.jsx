import React, { useState, useEffect, useRef } from "react";
import YoutubeCard from "./YoutubeCard";
import config from "../config"; // Import centralized configuration

export default function YoutubeList() {
  let [loading, setLoading] = useState(false);
  let apiKey = config.YOUTUBE_API_KEY || "YOUR_DEFAULT_API_KEY"; // Use config for API key
  let channelId = config.CHANNEL_ID || "YOUR_DEFAULT_CHANNEL_ID"; // Use config for Channel ID
  const [videos, setVideos] = useState([]); // Stores videos
  const [nextPageToken, setNextPageToken] = useState(""); // Stores nextPageToken for pagination
  const observerRef = useRef(null); // Ref for the observer target
  const maxResults = 6; // Number of videos per request
  let [isTestUrl, setIsTestUrl] = useState(true);

  // Fetch YouTube videos
  const fetchVideos = async () => {
    if (loading) return; // Prevent duplicate requests
    setLoading(true);
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&type=video&key=${apiKey}`;
    if (nextPageToken) {
      url += `&pageToken=${nextPageToken}`;
    }

    try {
      if (isTestUrl) {
        url =
          "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
      }
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        setVideos((prev) => [...prev, ...data.items]); // Append new videos
        setIsTestUrl(false);
      } else {
        setIsTestUrl(true);
        setVideos(data);
      }

      setNextPageToken(data.nextPageToken || ""); // Update nextPageToken
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    console.log("useeffect call");
    fetchVideos();
  }, []);

  // Set up IntersectionObserver to detect when user scrolls near the bottom
  useEffect(() => {
    if (!observerRef.current || !nextPageToken) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchVideos(); // Load more videos when the target is visible
        }
      },
      { rootMargin: "100px" } // Loads earlier before reaching bottom
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, loading]);

  if (loading) {
    return <></>;
  }

  // Memoizing video items to prevent re-rendering each item when the videos list changes
  const VideoItem = React.memo(({ item }) => {
    const videoUrl = `https://www.youtube.com/embed/${item.id.videoId}`;
    <YoutubeCard
      title={item.title}
      url={videoUrl}
      thumbnailUrl={item.snippet.thumbnails.high.url}
      viewerCount={item.views}
      channelName={item.author}
      yearUpload={item.uploadTime}
    ></YoutubeCard>;
  });

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1 p-primary">
        {!isTestUrl &&
          videos.length > 0 &&
          videos.map((item, index) => {
            return <VideoItem key={item.id.videoId} item={item}></VideoItem>;
          })}
        {isTestUrl &&
          videos.map((item, index) => {
            const videoUrl = item.videoUrl;
            return (
              <YoutubeCard
                title={item.title}
                key={item.id}
                url={videoUrl}
                thumbnailUrl={item.thumbnailUrl}
                viewerCount={item.views}
                channelName={item.author}
                yearUpload={item.uploadTime}
                isTestUrl
              ></YoutubeCard>
            );
          })}
      </div>
      <div
        className="hidden"
        ref={observerRef}
        style={{ height: "50px" }}
      ></div>
      {loading && <p>Loading more videos...</p>}
    </>
  );
}
