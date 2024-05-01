import { useState } from "react";
import ColorsData from "./ColorsData";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-10 px-2">
        <div className="flex flex-wrap items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {ColorsData.map((color) => (
            <button
              key={color.id}
              onClick={() => setColor(color.name)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
              style={{ backgroundColor: `${color.name}` }}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
