"use client";
import { UpperHeader } from "./HeaderUpper/HeaderUpper";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { devices } from "@/data/breakpoints";

export const Header = () => {
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      <header>
        <UpperHeader isDesktop={isDesktop} />
        {isDesktop && <HeaderBottom />}
      </header>
    </>
  );
};
