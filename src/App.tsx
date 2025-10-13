// TODO: Ensure the correct path to the card components. Update the path below if needed.

import { Item } from "@radix-ui/react-select";
import "./index.css";
import { ItemHeader } from "./components/ui/item";

export function App() {
  return (
    <div className="w-full items-center flex justify-center min-h-screen">
      <div className="flex items-end gap-6">
        <h1
          className="uppercase font-extrabold text-9xl -rotate-180"
          style={{ writingMode: `vertical-lr`, userSelect: "none" }}
        >
          nnamdi
        </h1>
        <div className="h-full flex flex-col gap-8">
          <a className="uppercase font-extrabold text-6xl">
            <h2>stuff</h2>
          </a>
          <a className="uppercase font-extrabold text-6xl">
            <h2>about</h2>
          </a>
          <a className="uppercase font-extrabold text-6xl">
            <h2>games</h2>
          </a>
          <a href="#" className="uppercase font-extrabold text-6xl">
            <h2>projects</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
