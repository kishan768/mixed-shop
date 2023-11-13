import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { getTotalPrice } from "../helper/getTotalPrice";
import { Button, CartItem, EmptyCart } from "../components";
import { useUserContext } from "../context/UserContext";
export default function CartContainer() {
  const { cart, clearCart } = useCartContext();
  const shippingCharge = 99;
  const subTotal = getTotalPrice(cart);

  const totalPrice = subTotal + shippingCharge;
  const navigate = useNavigate();
  const { user } = useUserContext();

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      <div className=" hidden capitalize md:flex space-y-3  md:justify-around  md:items-center">
        <h3 className="flex basis-56 space-x-3 ">items</h3>
        <h3>quantity</h3>
        <h3>subtotal</h3>
      </div>
      <div className="mx-3 my-5 space-y-10 ">
        {cart.map((item, i) => (
          <CartItem key={i} cart={item} />
        ))}
      </div>
      <div className="h-[0.5px] bg-gray-300"></div>

      <div className="flex p-2 justify-between md:justify-around">
        <Button onClick={() => navigate("/product")} size="sm">
          continue shopping
        </Button>
        <Button size="sm" onClick={() => clearCart()} type="gray">
          clear shopping cart
        </Button>
      </div>

      <div className="border w-96 mx-auto mt-10  border-gray-300 rounded-md p-6 space-y-3">
        <div className="flex tracking-wide font-semibold capitalize justify-around">
          <h2>Subtotal :</h2>{" "}
          <span className="basis-20">&#8377;{subTotal}</span>
        </div>
        <div className="flex capitalize font-thin justify-around">
          <h2>shipping fee :</h2>{" "}
          <span className="basis-20">&#8377;{shippingCharge}</span>
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <div className="flex text-2xl tracking-wider font-semibold capitalize justify-around">
          <h2>order total :</h2>{" "}
          <span className="basis-20">&#8377;{totalPrice}</span>
        </div>
      </div>
      {/* login btn */}
      <div className="text-center mb-10">
        <Link to={`${Object.keys(user).length ? "/checkout" : "/login"}`}>
          <Button type="large" width="96" size="sm">
            {Object.keys(user).length ? "place order" : "login"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
