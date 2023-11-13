import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import AddToCart from "./AddToCart";
import Button from "./Button";
import Rating from "./Rating";

/* eslint-disable react/prop-types */
export default function ProductInfo({ product }) {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  // console.log(product);
  const isItemAlreadyInCart = cart.find((item) => item.id === product.id)
    ? true
    : false;

  const class1 = "font-semibold capitalize tracking-wider text-stone-60000";
  const class2 = "mx-10 text-base capitalize ";

  return (
    <div className="m-8">
      <h2 className="text-3xl font-extrabold tracking-wider mt-2">
        {product.title}
      </h2>
      {/* //rating component  */}

      <Rating rating={product.rating} />
      <p className="text-sm text-orange-400 font-normal mt-2">
        &#x20B9; {product.price * 80}
      </p>
      <p className="text-sm my-4  tracking-tight font-semibold">
        {product.description}
      </p>

      <div className="flex ">
        <div>
          <p className={class1}>available</p>

          <p className={class1}>brand</p>
          <p className={class1}>id</p>
          <p className={class1}>stock</p>
        </div>
        <div>
          <p className={class2}>
            <span className="mr-3">:</span>
            {product.stock ? "in stock" : "out of stock"}
          </p>
          <p className={class2}>
            <span className="mr-3">:</span>
            {product.brand}
          </p>
          <p className={class2}>
            <span className="mr-3">:</span>
            {product.id}
          </p>
          <p className={class2}>
            <span className="mr-3">:</span>
            {product.stock}
          </p>
        </div>
      </div>

      <div className="underline w-96 mt-5 flex  h-[1px] bg-gray-400"></div>
      {product.stock > 0 && !isItemAlreadyInCart ? (
        <AddToCart stock={product.stock} product={product} />
      ) : (
        <Button onClick={() => navigate("/cart")}>view cart</Button>
      )}
    </div>
  );
}

// function Star() {
//   const rating = 0;
//   const tempStar = Array.from({ length: 5 }, (_, index) => {
//     const number = index + 0.5;
//     return (
//       <span key={index}>
//         {rating >= index + 1
//           ? "full star "
//           : rating >= index + number
//           ? "half star "
//           : "star "}
//       </span>
//     );
//   });
//   return <div>{tempStar}</div>;
// }
