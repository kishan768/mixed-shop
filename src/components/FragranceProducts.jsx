import { useProductsContext } from "../context/ProductsContext";
import { Loader, ProductItem } from "../components";
import Error from "../pages/ErrorPage";
export default function FragranceProducts() {
  const { isProductsLoading, isProductsError, fragnence_products } =
    useProductsContext();

  if (isProductsLoading)
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  if (isProductsError) return <Error />;
  return (
    <>
      <h1 className="text-center text-3xl mb-2 mt-2 font-thin tracking-wide">
        fragrances
      </h1>
      <div className="underline  w-10 h-1 mt-2 mb-2 bg-orange-300 mx-auto"></div>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3">
        {fragnence_products.slice(0, 3).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
