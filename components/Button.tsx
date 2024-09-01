"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {}
const Button: FC<ButtonProps> = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
    >
      {pending ? "Adding User..." : "Add User"}
    </button>
  );
};

export default Button;
