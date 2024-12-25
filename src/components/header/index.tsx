import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";
import { useScreenSize } from "../../hooks";

export default function Header() {
  const { isMobile, isDesktop } = useScreenSize();

  let headerContent;

  switch (true) {
    case isMobile:
      headerContent = <MobileHeader />;
      break;
    case isDesktop:
      headerContent = <DesktopHeader />;
      break;
    default:
      headerContent = <MobileHeader />;
  }

  return headerContent;
}
