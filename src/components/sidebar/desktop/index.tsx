import { useLocation } from "react-router-dom";
import { routes } from "../../../constants/routes";
import Navlink from "../../navlink";

export default function DesktopSidebar() {
  const { pathname } = useLocation();

  return (
    <div className={`h-full w-[15%] pr-2`}>
      <div className="flex flex-col gap-2">
        {routes.map((route, i) => {
          return (
            <Navlink
              key={i}
              icon={route.icon}
              label={route.label}
              path={route.path}
              isActive={route.path === pathname}
            />
          );
        })}
      </div>
    </div>
  );
}
