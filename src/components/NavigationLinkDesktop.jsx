import { NavLink } from "react-router-dom";
import CartLink from "./CartLink";

export default function NavigationLinkDesktop() {
  return (
    <>
      <div className="hidden sm:hidden md:visible lg:flex xl:flex 2xl:flex">
        <NavLink
          to="/about"
          className="ml-2  hover:underline  capitalize bg-stone-100 rounded-md p-2 transition-all duration-300"
        >
          about
        </NavLink>
        <NavLink
          to="/product"
          className="ml-2  transition-all duration-300 hover:underline capitalize bg-stone-100 rounded-md p-2"
        >
          product
        </NavLink>
      </div>
      <CartLink />
    </>
  );
}
