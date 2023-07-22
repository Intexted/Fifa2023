import { prisma } from "@/db";
import Link from "next/link";

function getPlayers() {
  return prisma.player.findMany();
}

export default async function Home() {
  const players = await getPlayers();
  console.log(players);
  return (
    <main className=" p-15">
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="font-bold text-2xl">List des joueurs</h1>
        <Link href="/new">
          <h1 className="shadow-md p-2 border-2 cursor-pointer border-gray-300">
            + Ajouter un joueur
          </h1>
        </Link>
      </div>
      <hr />
      <div
        className="border-2 border-gray-900 w-[65%] mx-auto
       mt-10 h-[300px] rounded-md p-2 gap-10"
      >
        <table className="">
          <tr className="flex items-center  justify-between gap-5 border-b border-black ">
            <th className="font-medium text-gray-500">id</th>
            <th className="font-medium text-gray-500">Nom Complet</th>
            <th className="font-medium text-gray-500">Salaire Annuel</th>
            <th className="font-medium text-gray-500">BUT</th>
            <th className="font-medium text-gray-500">Actions</th>
          </tr>
          {players.slice(0, 6).map((player) => (
            <tr
              className="flex items-center text-left justify-between gap-10 "
              key={player.id}
            >
              <td className="mb-4">{player.id}</td>
              <td className="mb-4">
                {player.firstname + " " + player.lastname}
              </td>
              <td className="mb-4">{player.salary + player.devise}</td>
              <td className="mb-4">{player.goal}</td>
              <td className="mb-4">actions</td>
            </tr>
          ))}
        </table>
      </div>
    </main>
  );
}
