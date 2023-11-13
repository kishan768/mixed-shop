/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Images({ images = [{ url: "" }] }) {
  const [mainImage, setmainImage] = useState(0);
  return (
    <div className="m-8">
      {/* <div>
        <Button>back to product</Button>
      </div> */}
      <div className="mt-5 ">
        <img
          src={images[mainImage]}
          alt=""
          className="max-w-md max-h-60 rounded-md "
        />
      </div>
      <div className="flex mt-5">
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            className={`h-12 w-14 m-2 rounded-md cursor-pointer border-${
              i === mainImage ? "2" : ""
            } border-orange-400`}
            onClick={() => setmainImage(i)}
          />
        ))}
      </div>
    </div>
  );
}
