"use client";

import Link from "next/link";
import FormPlayer from "../components/FormPlayer";

function App() {
  return (
    <div className="flex flex-col p-10 justify-center">
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="font-bold text-2xl">Ajouter un joueur</h1>
        <Link href="/">
          <h1 className="shadow-md p-2 border-2 cursor-pointer border-gray-300">
            back
          </h1>
        </Link>
      </div>
      <FormPlayer />
    </div>
  );
}

export default App;
