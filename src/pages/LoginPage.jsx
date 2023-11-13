import { useState } from "react";
import Button from "../components/Button";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const { setUser, user } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "kminchelle" || password !== "0lelplR") {
      alert(
        "don't change username and password!  Currently application in testing phase"
      );
    }
    setUser(username, password);
    navigate("/checkout");
  };

  if (Object.keys(user).length) {
    return (
      <div className="p-10 flex justify-center items-center h-[70vh] md:px-32 md:flex md:items-center md:justify-center">
        <h1
          className="text-3xl p-0 capitalize text-orange-400 transition-all
        duration-500 hover:text-orange-800
        "
        >
          your are already loged in
        </h1>
      </div>
    );
  }

  return (
    <div className="p-10 md:px-32 md:flex md:items-center md:justify-center">
      <form className="px-6  space-y-5  shadow-md shadow-orange-400 py-20 w-[25rem] border-2 bg-gray-300 rounded-lg">
        <div className="grid grid-cols-2">
          <label className="font-mono px-3 text-xl" htmlFor="username">
            username
          </label>
          <input
            className="border placeholder:text-lg   text-xl   placeholder:px-2   bg-gray-200 placeholder:text-gray-600  rounded-md border-gray-500"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter your username"
          />
        </div>
        <div className="grid grid-cols-2">
          <label className="font-mono px-3 text-xl" htmlFor="password">
            password
          </label>
          <input
            className="border placeholder:text-lg text-xl placeholder:px-2  bg-gray-200 placeholder:text-gray-600   rounded-md border-gray-500"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
          />
        </div>
        <div>
          <Button onClick={handleSubmit} size="xl" width="80" type="large">
            login
          </Button>
        </div>
      </form>
    </div>
  );
}
