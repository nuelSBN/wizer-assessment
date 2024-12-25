import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/logo-dark.png";
import { routes } from "../../../constants/routes";
import { useSidebar } from "../../../context";
import Navlink from "../../navlink";

export default function MobileSidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const { pathname } = useLocation();

  return (
    <div
      className={`bg-[#0f0e0e66] w-full h-dvh absolute z-50 left-0 top-0 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-[80%] h-full flex flex-col justify-between px-3 py-5 bg-white overflow-y-auto">
        <div className="flex flex-col gap-5 h-2/3">
          <div className="flex justify-between items-center">
            <h1
              className={`text-lg font-bold text-[#101928] transition-opacity duration-300`}
            >
              <img src={logo} alt="" className="w-24" />
            </h1>

            <FaTimes onClick={toggleSidebar} />
          </div>
          <div className="">
            {routes.map((route, index) => (
              <Navlink
                key={index}
                icon={route.icon}
                label={route.label}
                path={route.path}
                isActive={route.path === pathname}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
