// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import gallery6 from "../assets/gallery6.jpg";
import {
  FragranceProducts,
  LaptopProducts,
  MobileProducts,
  Subscribe,
  Button,
} from "../components";
export default function HomePage() {
  return (
    <>
      <div className=" p-10 lg:px-40 xl:px-40">
        <div className="flex">
          <div>
            <h1 className="text-4xl uppercase font-semibold tracking-wider mb-2 lg:mb-5 xl:mb-5">
              buy with your choice
            </h1>
            <p className="p-1 tracking-tighter text-sm lg:text-base xl:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, et
              iusto. Modi molestias maiores doloremque aperiam quam ut at
              tenetur? Totam ratione dolorum qui nesciunt, aliquid, architecto
              amet iste quo, odio voluptas non hic.
            </p>

            <Link to="/product">
              <Button size="sm">buy</Button>
            </Link>
          </div>
          {/* image */}
          <div className="hidden md:block lg:block xl:block">
            <img src={gallery6} alt="image" className="w-screen h-72 z-0" />
          </div>
        </div>

        <h1 className="text-4xl font-medium mt-10 w-80 mx-auto  tracking-wide">
          featured products
        </h1>
        <div className="underline  w-32 h-1 mt-2 mb-2 bg-orange-300 mx-auto"></div>
        <MobileProducts />
        <LaptopProducts />
        <FragranceProducts />
        <div className="text-center">
          <Link to="/product">
            <Button>all product</Button>
          </Link>
        </div>
        <Subscribe />
      </div>
      {/* <Footer /> */}
    </>
  );
}
