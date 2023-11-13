/* eslint-disable react/prop-types */
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useCartContext } from "../context/CartContext";
export default function CartItem({ cart }) {
  const { discountPercentage, id, img, price, quantity, stock, title } = cart;
  // console.log(cart);
  const { deleteCartItem, incQuantity, decQuantity } = useCartContext();
  const inc = () => {
    if (quantity < stock) incQuantity(id);
  };
  const dec = () => {
    if (quantity > 1) decQuantity(id);
  };
  return (
    <div>
      <div className="hidden md:flex bg-gray-300 my-5   h-[0.5px]"></div>
      <div className="flex  justify-around  items-center">
        <div className="flex basis-56 space-x-3 ">
          <img src={img} alt="" className="w-20 h-20" />
          <div className="space-y-0.5">
            <h2 className="font-semibold">{title}</h2>
            <p>{discountPercentage}% off</p>
            <p className="font-thin text-orange-700">&#8377;{price}</p>
          </div>
        </div>
        <div>
          <button className="text-2xl m-2" onClick={dec}>
            ➖
          </button>
          <span className="text-2xl m-2">{quantity}</span>
          <button className="text-2xl m-2" onClick={inc}>
            ➕
          </button>
        </div>
        {/* delete button */}
        <div>
          <RiDeleteBin6Fill
            onClick={() => deleteCartItem(id)}
            className="text-3xl mx-2 my-3 cursor-pointer text-red-600"
          />
        </div>
      </div>
    </div>
  );
}
