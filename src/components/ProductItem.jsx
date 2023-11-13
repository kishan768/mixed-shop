import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductItem({ product }) {
  const { id, title, price, thumbnail } = product;
  // console.log(id);
  if (product.length === 0) return <h1>no product</h1>;
  return (
    <article className="border-2  border-gray-300 bg-stone-200  m-0.5 rounded-lg hover:opacity-70 ">
      <Link to={`/product/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md h-64 w-[30rem]  "
        />
      </Link>
      <div className="p-3 text-sm ">
        <p>
          <span className="font-semibold tracking-wide m-1 md:bottom-0">
            price
          </span>
          : &#x20B9; {price * 80}
        </p>
      </div>
    </article>
  );
}
