import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContextProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
