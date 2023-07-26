import formatNumber from "@/utils/formatNumber";
import Link from "next/link";
import DeleteButton from "./components/DeleteButton";
import { getPlayers } from "@/actions";
import Pagination from "./components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const players = await getPlayers();

  const page = Number(searchParams.page) || 0;

  return (
    <main className=" p-15">
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="font-bold text-2xl">List des joueurs</h1>
        <Link href="/new">
          <h1 className="shadow-md p-2 border-2 cursor-pointer text-white bg-blue-500 rounded-md">
            + Ajouter un joueur
          </h1>
        </Link>
      </div>
      <hr />
      <div className=" w-[65%] mx-auto my-10 h-[300px] rounded-md p-2 gap-5">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="  px-4 py-2 font-medium text-gray-500">id</th>
              <th className="  px-4 py-2 font-medium text-gray-500">
                Nom Complet
              </th>
              <th className="  px-4 py-2 font-medium text-gray-500">
                Salaire Annuel
              </th>
              <th className="  px-4 py-2 font-medium text-gray-500">BUT</th>
              <th className="  px-4 py-2 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.slice(page * 6, (page + 1) * 6).map((player) => (
              <tr key={player.id} className="border-b border-gray-300">
                <td className="px-4 py-2">{player.id}</td>
                <td className="px-4 py-2">
                  {player.firstname + " " + player.lastname}
                </td>
                <td className="px-4 py-2">
                  {formatNumber(player.salary, 0) + " " + player.devise}
                </td>
                <td className="px-4 py-2">{player.goal}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Link href={`/update/${player.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    <DeleteButton id={player.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination page={page} />
      </div>
    </main>
  );
}
