import React from "react";
import PropTypes from "prop-types";
import { MySideMenu } from "./index.styles";
import SideDrawer from "../SideDrawer/SideDrawer";

function SideMenu(props) {
  return (
    <MySideMenu {...props} onClick={props.onClick}>
      <div>
        {props.label}
        <div>
      
        </div>
      </div>
    </MySideMenu>
  );
}

SideMenu.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default SideMenu;
