import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function Rating({ rating = 0 }) {
  //star logic
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span className="text-yellow-500" key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <div className="flex my-3">{tempStars}</div>;
}
