import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useSidebarContext } from "../context/SidebarContext";

export default function Logo() {
  const { sidebarClose } = useSidebarContext();
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 animate-pulse cursor-pointer"
          onClick={sidebarClose}
        />
      </NavLink>
      <h3 className="text-3xl uppercase p-10 animate-pulse  tracking-wide font-medium  text-orange-400 duration-1000">
        mixed-shop
      </h3>
    </div>
  );
}
