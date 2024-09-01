"use server";

import { ApiResponse } from "@/types/Utility";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

const db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> =
  new PrismaClient();

export const getUser = async () => {
  const res: ApiResponse<User[]> = {
    success: false,
    payload: null,
    message: "Couldn't get users",
  };

  try {
    const allUser: User[] = await db.user.findMany();

    res.payload = allUser;
    res.message = "Success";
    res.success = true;

    return res;
  } catch (err) {
    console.error("API error:", err);
    return res;
  }
};

export const createUser = async (formData: any) => {
  const res: ApiResponse<User> = {
    success: false,
    payload: null,
    message: "Couldn't create user",
  };

  const name: string = formData.get("name");

  try {
    const newUser = await db.user.create({ data: { name } });

    res.payload = newUser;
    res.message = "Success";
    res.success = true;

    if (newUser?.id) {
      revalidatePath("/user");
    }
    return res;
  } catch (err) {
    console.error("API error:", err);
    return res;
  }
};

export const deleteUser = async (id: number) => {
  const res: ApiResponse<User> = {
    success: false,
    payload: null,
    message: "Couldn't get users",
  };

  try {
    const deletedUser = await db.user.delete({ where: { id } });

    res.payload = deletedUser;
    res.message = "Success";
    res.success = true;

    deletedUser.id === id && revalidatePath("/");

    return res;
  } catch (err) {
    console.error("API error:", err);
    return res;
  }
};
