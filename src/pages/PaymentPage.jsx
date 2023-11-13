import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useCartContext } from "../context/CartContext";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { clearCart } = useCartContext();
  return (
    <div className="container p-20 h-[70vh]">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl mb-10 animate-bounce capitalize tracking-wider font-mono">
          wow 😍 you have successfully completed your order.
        </h1>

        <Button
          onClick={() => {
            navigate("/");
            clearCart();
          }}
        >
          back to home
        </Button>
      </div>
    </div>
  );
}
