import { RiAiGenerate2 } from "react-icons/ri";
export default function Header() {
  return (
    <>
      <div className="sticky top-0 bg-white z-1 mb-primary border-b">
        <header className="flex-col p-primary m-primary border-secondary">
          <h1 className="mb-primary capitalize">
            <strong>
              Enter the title of the subject you are interested in and press AI
              button.
            </strong>
          </h1>
          <div className="flex">
            <input className="flex-1 mr-primary border border-secondary outline-hidden focus:border-secondary p-primary"></input>
            <button className="border border-secondary p-primary cursor-pointer hover:bg-secondary text-secondary hover:text-primary">
              <RiAiGenerate2 className="text-3xl"></RiAiGenerate2>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
