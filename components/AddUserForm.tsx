"use client";

import { createUser } from "@/Action/UserAPI";
import { FC, useRef } from "react";
import SubmitButton from "./SubmitButton";
import { ApiResponse } from "@/types/Utility";
import { User } from "@prisma/client";

interface AddUserFormProps {}

const AddUserForm: FC<AddUserFormProps> = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (formData: any) => {
    const newUser: ApiResponse<User> = await createUser(formData);
    newUser?.payload?.id && formRef?.current && formRef.current.reset();
  };
  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="w-full mx-auto p-4 shadow-md rounded-md bg-white"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter user name"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default AddUserForm;
