import { useState,useEffect } from "react";
export const useUserStatus = () => {
  const token = localStorage.getItem("authToken");
  const [isLogged, setIsLogged] = useState(false);



  useEffect(() => {
	setIsLogged(!token ? false : true);
  }, [token])
  

  return { isLogged };
};
