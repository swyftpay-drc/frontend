"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

export type Props = PropsWithChildren & {};
const Provider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init()
  }, []);
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
