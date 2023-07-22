"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/db";

type FormData = {
  firstName: string;
  lastName: string;
  salary: number;
  goal: number;
  devise: string;
};

const submitData = async (data: any) => {
  const firstName = data.firstName;
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
  console.log(firstName);
  redirect("/");
  console.log("IT WORKED", data);
};

// async function submitData(data: FormData) {
//   const firstName = data.firstName;
//   // await prisma.player.create({ data:{
//   //   firstName,
//   //   lastName,
//   //   salary,
//   //   goal ,
//   //   devise,
//   // }

//   //  });
//   console.log("qsdq", firstName, data);
//   // redirect("/");
//   console.log("IT WORKED", data);
// }

export default submitData;
