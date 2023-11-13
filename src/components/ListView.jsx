import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ListView({ products }) {
  if (products.length === 0)
    return (
      <h1 className="flex justify-center items-center text-3xl text-orange-400">
        no product
      </h1>
    );
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {/* <ProductItem product={product} /> */}

          <article className="border-2 gap-2 border-gray-300 bg-stone-200  m-1 rounded-lg hover:opacity-70 flex flex-col md:flex-row">
            <Link to={`/product/${product.id}`} className="basis-1/3">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md h-64 w-full"
              />
            </Link>
            <div className="p-3 text-sm ">
              <p className="space-x-2 font-extrabold tracking-wider">
                {product.title}
              </p>
              <p className="space-x-2">&#x20B9; {product.price * 80}</p>
              <p className="text-sm ">{product.description}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
