// "use client";

import Link from "next/link";
import FormPlayer from "../../components/FormPlayer";
import { prisma } from "@/db";

async function App({ params }: { params: { id: number } }) {
  const user = await prisma.player.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  console.log("user", user);
  //   console.log(params);
  return (
    <div className="flex flex-col p-10 justify-center">
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="font-bold text-3xl">Mise a jour d&apos;un Joueur</h1>
        <Link href="/">
          <button className=" flex items-center gap-1 border border-black rounded-md bg-gray-600 text-white cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Back</h3>
          </button>
        </Link>
      </div>
      {user !== null && <FormPlayer id={params.id} user={user} />}
    </div>
  );
}

export default App;
