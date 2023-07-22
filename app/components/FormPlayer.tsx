"use client";

import { redirect } from "next/navigation";
import { prisma } from "@/db";
import Link from "next/link";

import submitData from "@/actions";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  salary: number;
  goal: number;
  devise: string;
};

function FormPlayer() {
  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    salary: z.number(),
    goal: z.number(),
    devise: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  //   const submitData = (data: FormData) => {
  //     // "use server";
  //     const firstName = data.firstName;
  //     prisma.player.create({
  //       data: {
  //         firstname: data.firstName,
  //         lastname: data.lastName,
  //         salary: data.salary,
  //         goal: data.goal,
  //         devise: data.devise,
  //         pictureURl: "",
  //       },
  //     });
  //     console.log(firstName);
  //     redirect("/");
  //     console.log("IT WORKED", data);
  //   };

  return (
    <div>
      {" "}
      <form
        className="flex flex-col gap-5"
        action={handleSubmit(submitData) as () => void}
      >
        <label> First Name: </label>
        <input
          className="border border-black p-2"
          type="text"
          {...register("firstName")}
        />
        {errors.firstName && <span> {errors.firstName.message}</span>}
        <label> Last Name: </label>
        <input
          className="border border-black p-2"
          type="text"
          {...register("lastName")}
        />
        {errors.lastName && <span> {errors.lastName.message}</span>}
        <label> salaire Annuel </label>
        <input
          className="border border-black p-2"
          type="number"
          {...register("salary", { valueAsNumber: true })}
        />
        {errors.salary && <span> {errors.salary.message}</span>}
        <label> devise </label>
        <input
          className="border border-black p-2"
          type="text"
          {...register("devise")}
        />
        {errors.devise && <span> {errors.devise.message}</span>}
        <label> But </label>
        <input
          className="border border-black p-2"
          type="number"
          {...register("goal", { valueAsNumber: true })}
        />
        {errors.goal && <span> {errors.goal.message}</span>}

        <input className="border border-black p-2" type="submit" />
      </form>
    </div>
  );
}

export default FormPlayer;
