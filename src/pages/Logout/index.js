import React from "react";
import Button from "../../stories/components/Button/Button";

const Logout = () => {
	const logout = () => {
		localStorage.removeItem("authToken");
	  };
  return (
    <div>
      <Button onClick={logout} label="logout" bgcolor={"green"} color={"white"} />
    </div>
  );
};

export default Logout;
