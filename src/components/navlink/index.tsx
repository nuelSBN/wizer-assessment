import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../context";

interface Props {
  label: string;
  icon: React.ReactNode;
  path: string;
  isActive: boolean;
}

export default function Navlink({ icon, isActive, label, path }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const { closeSidebar } = useSidebar();

  return (
    <Link
      to={path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={closeSidebar}
      className={`flex items-center w-full p-2 gap-2 rounded-md ${
        isActive || isHovered ? "bg-[#8158F3] text-white" : ""
      }`}
    >
      {icon} {label}
    </Link>
  );
}
