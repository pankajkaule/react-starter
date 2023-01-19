import React from "react";
import PropTypes from "prop-types";
import { MyFooter } from "./index.styles";

function Footer(props) {
  

  return (
    <MyFooter {...props} onClick={props.onClick}>
    {props.label}
    </MyFooter>
  );
}

Footer.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Footer;
