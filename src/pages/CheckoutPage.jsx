import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Button from "../components/Button";
import { useState } from "react";
export default function CheckoutPage() {
  const { user } = useUserContext();
  const [name, setName] = useState(user.firstName ? user.firstName : "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="p-10 md:px-32 md:flex md:items-center md:justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="px-6  space-y-5 md:w-[80vw]  shadow-orange-400 py-6 border  rounded-lg"
      >
        <h2 className="uppercase mb-3 text-orange-400">delivery address</h2>
        {/* name */}
        <div className="flex space-y-1 flex-col">
          <label className="font-mono  text-xl" htmlFor="name">
            name
          </label>
          <input
            className="border placeholder:text-lg   md:w-[25vw] text-lg   placeholder:px-2   bg-gray-200 placeholder:text-gray-600  rounded-md border-gray-500"
            type="text"
            name="name"
            // defaultValue={user.firstName}
            placeholder="enter your name"
            value={name}
            maxLength="30"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* address */}
        <div className="flex space-y-1 flex-col">
          <label className="font-mono  text-xl" htmlFor="address">
            address
          </label>
          <textarea
            className="border placeholder:text-lg   md:w-[25vw] text-lg   placeholder:px-2   bg-gray-200 placeholder:text-gray-600  rounded-md border-gray-500"
            // type="text"

            name="address"
            placeholder="enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* phone number */}
        <div className="flex space-y-1 flex-col">
          <label className="font-mono text-xl" htmlFor="phoneNumber">
            phone number
          </label>
          <input
            className="border  placeholder:text-lg   md:w-[25vw] text-lg   placeholder:px-2   bg-gray-200 placeholder:text-gray-600  rounded-md border-gray-500"
            type="number"
            name="phoneNumber"
            placeholder="enter  your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* submit button */}
        <Link to="/payment">
          <Button disable={!name || !address || !phone} width="80" type="large">
            confirm order
          </Button>
        </Link>
      </form>
    </div>
  );
}
