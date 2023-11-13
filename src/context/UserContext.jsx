/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/userReducer";
import { GET_USER } from "../actions";
const UserContext = createContext();

const initialState = {
  user: {},
};

const UserProvider = ({ children }) => {
  const [{ user }, dispatch] = useReducer(reducer, initialState);

  const setUser = async (username, password) => {
    const resp = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    });

    const data = await resp.json();
    // console.log(data);

    dispatch({ type: GET_USER, payload: data });
  };

  //   useEffect(() => {
  //     getUser("kminchelle", "0lelplR");
  //   }, []);
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
