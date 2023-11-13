/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import { useCartContext } from "../context/CartContext";

export default function AddToCart({ stock, product }) {
  const [cartAmount, setCartAmount] = useState(0);
  const { addToCart } = useCartContext();

  function handleInc() {
    if (cartAmount > stock - 1) return;
    setCartAmount((cartAmount) => cartAmount + 1);
  }
  function handleDec() {
    if (cartAmount < 1) {
      setCartAmount(0);
      return;
    }
    setCartAmount((cartAmount) => cartAmount - 1);
  }

  const handleAddToCart = () => {
    const newCartItem = {
      id: product.id,
      brand: product.brand,
      discountPercentage: product.discountPercentage,
      price: product.price * 80,
      subTotalPrice: product.price * 80 * cartAmount,
      stock: product.stock,
      title: product.title,
      quantity: cartAmount,
      img: product.thumbnail,
    };
    addToCart(newCartItem);
  };
  return (
    <div className="mt-8">
      <div>
        <button className="text-3xl m-2" onClick={handleDec}>
          ➖
        </button>
        <span className="text-3xl m-2">{cartAmount}</span>
        <button className="text-3xl m-2" onClick={handleInc}>
          ➕
        </button>
      </div>
      <div>
        <Button disable={!cartAmount} onClick={handleAddToCart} size="sm">
          add to cart
        </Button>
      </div>
    </div>
  );
}
