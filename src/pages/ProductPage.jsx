import { FilterByCategory, GridView, ListView, Loader } from "../components";
import { useFilterContext } from "../context/FilterContext";
import { useProductsContext } from "../context/ProductsContext";
import ErrorPage from "./ErrorPage";
import { BsFillGridFill, BsList } from "react-icons/bs";
export default function ProductPage() {
  const {
    isProductsLoading,
    isProductsError,
    products,
    gridView,
    switchGrid,
    switchList,
  } = useProductsContext();
  const { sortedBy, filteredProducts } = useFilterContext();
  // console.log(useFilterContext);
  function handleSelect(e) {
    // console.log(e.target.value);
    sortedBy(e.target.value);
  }

  if (isProductsLoading)
    return (
      <span className="flex justify-center">
        <Loader />
      </span>
    );
  if (isProductsError) return <ErrorPage />;
  if (products.length < 1)
    return (
      <h5 style={{ textTransform: "nono" }}>
        sorry , no product match your search...
      </h5>
    );
  return (
    <div className="lg:flex">
      <FilterByCategory />

      <div>
        <div className="px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex space-x-2 my-2">
            <button onClick={() => switchGrid()}>
              <BsFillGridFill className="text-2xl p-0.5 cursor-pointer border border-stone-700" />
            </button>
            <button onClick={() => switchList()}>
              <BsList className="text-2xl p-0.5cursor-pointer border border-stone-700 cursor-pointer " />
            </button>
          </div>
          <div>
            <p className="my-2">{filteredProducts.length} producst found</p>
          </div>
          <div className="underline h-[1px] w-96 lg:w-[30rem] bg-stone-400 my-2"></div>
          <div className="flex space-x-2">
            <h1>Sorted by</h1>
            <select name="soryBy" id="" onChange={handleSelect}>
              <option value="lowest">Price(Lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="AtoZ">Name(A - Z)</option>
              <option value="ZtoA">Name(Z - A)</option>
            </select>
          </div>
        </div>
        <div className="divide-y divide-red-500 ">
          {gridView ? (
            <GridView products={filteredProducts} />
          ) : (
            <ListView products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
}
