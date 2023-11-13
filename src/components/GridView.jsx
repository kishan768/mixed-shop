import ProductItem from "./ProductItem";

/* eslint-disable react/prop-types */
export default function GridView({ products }) {
  if (products.length === 0)
    return (
      <h1 className="flex justify-center items-center text-3xl text-orange-400">
        no product
      </h1>
    );
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="p-3 md:p-0 ">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}
