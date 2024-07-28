import { useState } from "react";

function App() {
  const [color, Setcolor] = useState("olive");
console.log("render",[color])
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap
 justify-center bottom-12 inset-x-0 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => Setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => Setcolor("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => Setcolor("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
