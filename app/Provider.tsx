"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const Provider: FC<ProvidersProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
