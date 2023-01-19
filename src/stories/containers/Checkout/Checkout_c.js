import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MyCheckout } from "./index.styles";


function Checkout_c(props) {
  return (
    <MyCheckout elevation={10} {...props} onClick={props.onClick}>
      <h1> {props.label}</h1>
      <ol style={{ textAlign: "left" }}>
        <li>add address here.</li>
        <li>select an Item Quantity</li>
        <li>Proceed To Payment Page</li>
        <li>Confirm order.</li>
      </ol>
    </MyCheckout>
  );
}

Checkout_c.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Checkout_c;
