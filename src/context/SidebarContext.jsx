/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions";
import reducer from "../reducers/sidebarReducer";
const SidebarContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

const SidebarProvider = ({ children }) => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [{ isSidebarOpen }, dispatch] = useReducer(reducer, initialState);
  const sidebarOpen = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const sidebarClose = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <SidebarContext.Provider
      value={{ dispatch, isSidebarOpen, sidebarOpen, sidebarClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarProvider, useSidebarContext };
