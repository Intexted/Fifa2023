"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/db";
import { FormData } from "./typings";
import { revalidatePath } from "next/cache";

export async function getPlayers() {
  return await prisma.player.findMany();
}

export const submitData = async (data: FormData) => {
  await prisma.player.create({
    data: {
      firstname: data.firstName,
      lastname: data.lastName,
      salary: data.salary,
      goal: data.goal,
      devise: data.devise,
      pictureURl: "",
    },
  });
  revalidatePath("/");
  redirect("/");
};

export const deletePlayer = async (id: number) => {
  await prisma.player.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
