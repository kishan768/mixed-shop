/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

import { useSidebarContext } from "../context/SidebarContext";
import { useCartContext } from "../context/CartContext";

export default function NavigationLink() {
  const { sidebarClose } = useSidebarContext();
  const classname =
    "ml-2  capitalize bg-stone-100 rounded-lg p-2   hover:transition-all hover:duration-500 hover:px-3 text-xl";
  const { cart } = useCartContext();
  return (
    <>
      <div className="flex flex-col">
        <NavLink onClick={sidebarClose} to="/about" className={classname}>
          about
        </NavLink>
        <NavLink onClick={sidebarClose} to="/product" className={classname}>
          product
        </NavLink>
      </div>
      {/* <CartLink /> */}
      <div className="flex items-start justify-center ">
        <NavLink
          onClick={sidebarClose}
          to="/cart"
          className="capitalize me-2 text-3xl hover:text-[2rem] hover:transition-all hover:duration-300"
        >
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
        <NavLink
          onClick={sidebarClose}
          to="/login"
          className="capitalize me-2 text-3xl hover:text-[2rem] hover:transition-all hover:duration-300"
        >
          <div className="flex items-center mr-2">
            login
            <span>
              <FaUserAlt className="m-1" />
            </span>
          </div>
        </NavLink>
      </div>
    </>
  );
}
