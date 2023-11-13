/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useSidebarContext } from "../context/SidebarContext";
import { useCartContext } from "../context/CartContext";
export default function CartLink() {
  const { isSidebarOpen } = useSidebarContext();
  const { cart } = useCartContext();
  return (
    <div
      className={`${
        !isSidebarOpen
          ? "hidden sm:hidden md:visible lg:flex xl:flex 2xl:flex"
          : ""
      }`}
    >
      <div className="flex ">
        <NavLink to="/cart" className="capitalize me-2 text-3xl">
          <div className="flex items-center mr-7">
            cart
            <span className="flex">
              <FaShoppingCart className="m-1 absolute" />
              <p className="bottom-2 relative left-7 bg-orange-400  rounded-full h-7 text-sm  p-1">
                {cart.length}
              </p>
            </span>
          </div>
        </NavLink>
        <NavLink to="/login" className="capitalize me-2 text-3xl">
          <div className="flex items-center mr-2">
            login
            <span>
              <FaUserAlt className="m-1" />
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
