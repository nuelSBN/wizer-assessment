import React from "react";
import { useScreenSize } from "../hooks";
import Mobile from "./mobile";
import Desktop from "./desktop";
import MobileLayout from "./mobile";

export default function Layout() {
  const { isMobile, isDesktop } = useScreenSize();

  let layoutContent;

  switch (true) {
    case isMobile:
      layoutContent = <MobileLayout />;

      break;
    case isDesktop:
      layoutContent = <Desktop />;
      break;

    default:
      layoutContent = <Mobile />;
      break;
  }

  return layoutContent;
}
