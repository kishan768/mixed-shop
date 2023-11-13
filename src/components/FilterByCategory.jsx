import { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Button from "./Button";
import { useFilterContext } from "../context/FilterContext";
import { getUniqueValue } from "../helper/getUniqueValue";
export default function FilterByCategory() {
  const [showDiscount, setShowDiscount] = useState(false);
  // const [price, setPrice] = useState(0);

  const {
    filter: { search, category, price, min_price, max_price },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValue(allProducts, "category");
  const brands = getUniqueValue(allProducts, "brand");

  const discountPercentage = [5, 10, 15, 20];

  const className =
    "tracking-wide font-thin my-1 cursor-pointer list-none  hover:text-orange-400";

  return (
    <form onSubmit={(e) => e.preventDefault()} className="px-8 py-5">
      {/* search input */}
      <div>
        <input
          onChange={updateFilters}
          type="text"
          name="search"
          value={search}
          className="bg-stone-200 text-sm inline rounded-md px-4 py-1 placeholder:text-slate-900"
          placeholder="Search"
        />
      </div>
      {/* end of search input */}
      {/* category */}
      <div>
        <h1 className="font-semibold text-md tracking-wide  my-3">Category</h1>
        <div className="text-sm px-1 flex flex-col items-start capitalize  text-green-900">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              name="category"
              onClick={updateFilters}
              className={`${className} ${
                category === item.toLowerCase()
                  ? "underline text-orange-400"
                  : null
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* end category */}
      {/* discount */}
      <div>
        <h1
          onClick={() => setShowDiscount((showDiscount) => !showDiscount)}
          className="font-semibold text-md tracking-wide my-3 border rounded-md flex  items-center justify-between cursor-pointer px-0.5 py-1 w-40 border-stone-300"
        >
          <span>Discount</span>
          <span>{!showDiscount ? <AiOutlineDown /> : <AiOutlineUp />}</span>
        </h1>

        <div
          className={`${
            showDiscount ? "" : "hidden"
          } flex flex-col items-start justify-center px-1`}
        >
          {discountPercentage.map((p) => (
            <div key={p}>
              <input
                type="checkbox"
                name="discount"
                value={p}
                onChange={updateFilters}
              />
              <span className="px-1">{p}% or more</span>
            </div>
          ))}
        </div>
        {/* TODO */}
      </div>
      {/* end discount */}
      {/* brand */}
      <div>
        <h1 className="font-semibold text-md tracking-wide my-3">Brand</h1>
        <select
          onChange={updateFilters}
          name="brand"
          // onChange={(e) => filters(e.target.value, "brand")}
          className="text-sm  rounded-md h-8 px-2 capitalize bg-stone-200  text-green-900"
        >
          {brands.map((item) => (
            <option key={item} className={className}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* end brand */}
      {/* price */}
      <div>
        <h1 className="font-semibold text-md tracking-wide my-5">Price</h1>
        <p>&#8377; {price * 80}</p>
        <input
          type="range"
          name="price"
          min={min_price}
          max={max_price}
          value={price}
          onChange={updateFilters}
        />
      </div>
      {/* end price */}
      {/* clear-all */}
      <Button size="sm" onClick={clearFilters}>
        clear all
      </Button>
    </form>
  );
}
