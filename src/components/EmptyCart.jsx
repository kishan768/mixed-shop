import { Link } from "react-router-dom";
import Button from "./Button";

export default function EmptyCart() {
  return (
    <div className="flex mx-3  my-5 h-80 justify-center flex-col space-y-6 items-center">
      <div className="text-5xl">cart is empty</div>
      <Link to="/product">
        <Button size="sm">fill it</Button>
      </Link>
    </div>
  );
}
