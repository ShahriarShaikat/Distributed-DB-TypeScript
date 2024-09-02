"use client";

import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {}
const SubmitButton: FC<SubmitButtonProps> = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        disabled={pending}
        type="submit"
        variant="solid"
        color="secondary"
      >
        {pending ? "Adding User..." : "Add User"}
      </Button>
    </>
  );
};

export default SubmitButton;
