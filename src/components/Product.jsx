import { Link, useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { Button, Images, Loader, ProductInfo } from "../components";
import { useEffect } from "react";
import { ErrorPage } from "../pages";
export default function Product() {
  const { id: pId } = useParams();
  const {
    fetchSingleProduct,
    isSingleProductLoading: loading,
    isSingleProductError: error,
    singleProduct: product,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(pId);
  }, [pId]);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );

  if (error) return <ErrorPage />;
  const { images } = product;
  return (
    <>
      <div className="mx-10 md:mx-28">
        <Link to="/product">
          <Button>back to product</Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <Images images={images} />
        <ProductInfo product={product} />
      </div>
    </>
  );
}
