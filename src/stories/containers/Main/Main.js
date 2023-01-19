import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MyMain } from "./index.styles";
import SideMenu from "../SideMenu/SideMenu";
import MainMenu from "../MainMenu/MainMenu";

function Main(props) {
  console.log(props);

  return (
    <MyMain {...props} onClick={props.onClick}>

      <SideMenu elevation={4} label={"side menu"} />
      <MainMenu data={props.Categorydata} />
    </MyMain>
  );
}

Main.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Main;
