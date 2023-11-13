/* eslint-disable react/prop-types */
import { NavigationLink, Logo } from "../components";
import { FaWindowClose } from "react-icons/fa";
import { useSidebarContext } from "../context/SidebarContext";

export default function Sidebar() {
  const { sidebarClose } = useSidebarContext();
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-around ">
        <Logo />
        <FaWindowClose
          onClick={sidebarClose}
          className="text-4xl cursor-pointer text-red-600"
        />
      </div>
      <NavigationLink />
    </div>
  );
}
