/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationLinkDesktop, Logo } from "../components";
import { useSidebarContext } from "../context/SidebarContext";
export default function NavBar() {
  const { isSidebarOpen, sidebarOpen } = useSidebarContext();
  return (
    <nav className="container ">
      <div className="flex items-center justify-between lg:justify-evenly">
        <Logo />
        <div>
          <GiHamburgerMenu
            className={`text-5xl me-3 ${
              isSidebarOpen
                ? "rotate-90 transition duration-500 text-teal-400"
                : "rotate-0 transition duration-500 "
            }  cursor-pointer   lg:hidden xl:hidden 2xl:hidden`}
            onClick={sidebarOpen}
          />
        </div>
        <NavigationLinkDesktop />
        {/* <CartLink /> */}
      </div>
    </nav>
  );
}
