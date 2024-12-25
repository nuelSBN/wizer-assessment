import { FaBars } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useSidebar } from "../../../context";
import MobileSidebar from "../../sidebar/mobile";

export default function MobileHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-[64px] w-full flex justify-between items-center px-4 shadow-[0px_4px_40px_0px_rgba(0,_0,_0,_0.15)] relative">
      <div className="flex gap-2">
        <FaBars onClick={toggleSidebar} />
      </div>
      <div className="flex items-center p-2 rounded-[2px] shadow-md">
        <FaUserCircle className="text-4xl " />
      </div>
      <MobileSidebar />
    </header>
  );
}
