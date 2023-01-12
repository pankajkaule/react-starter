import React, { useEffect } from "react";
import Button from "../../stories/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("authToken", "dsfsdfdsfsdfds");
    navigate("/cart");
  };

  return (
    <div>
      <Button onClick={login} label="Login" bgcolor={"green"} color={"white"} />
    </div>
  );
};

export default Login;
