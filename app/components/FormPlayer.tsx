"use client";

import { redirect } from "next/navigation";
import { prisma } from "@/db";
import Link from "next/link";

import { submitData } from "@/actions";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/typings";

function FormPlayer() {
  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    salary: z.number(),
    goal: z.number(),
    devise: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      {" "}
      <form
        className="flex flex-col gap-2 w-[50%] mx-auto"
        action={handleSubmit(submitData) as () => void}
      >
        {/* <label> First Name:</label> */}
        <input
          className="border border-black rounded-md p-2"
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="text-red-600"> {errors.firstName.message}</span>
        )}
        {/* <label> Last Name: </label> */}
        <input
          className="border border-black rounded-md p-2"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span className="text-red-600"> {errors.lastName.message}</span>
        )}
        {/* <label> salaire Annuel </label> */}
        <input
          className="border border-black rounded-md p-2"
          type="number"
          placeholder="salaire Annuel"
          {...register("salary", { valueAsNumber: true })}
        />
        {errors.salary && (
          <span className="text-red-600"> {errors.salary.message}</span>
        )}
        {/* <label> devise </label> */}
        <input
          className="border border-black rounded-md p-2"
          type="text"
          placeholder="devise"
          {...register("devise")}
        />
        {errors.devise && (
          <span className="text-red-600"> {errors.devise.message}</span>
        )}
        {/* <label> But </label> */}
        <input
          className="border border-black rounded-md p-2"
          type="number"
          placeholder="But"
          {...register("goal", { valueAsNumber: true })}
        />
        {errors.goal && (
          <span className="text-red-600"> {errors.goal.message}</span>
        )}
        <div className="flex items-center gap-2 w-full">
          <button
            className="border border-black rounded-md bg-blue-600 text-white cursor-pointer p-2 flex-1"
            type="submit"
          >
            Ajouter
          </button>
          <Link href="..">
            <button className="border border-black rounded-md bg-gray-600 text-white cursor-pointer p-2">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormPlayer;
