import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image } from "./index.styles";

function Banner(props) {
  console.log(props);
  
  return (
    < >

   {
    props.imagepath?
    <>
    <Image>
    <img width={"100%"} height={"100%"} src={props.imagepath} />
    </Image>
    </>
 :
    <img width={"200px"} height={"300px"} src="/dben-sew210.jpg" />
    
   }  
    </>
  );
}

Banner.propTypes = {
  bgcolor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Banner;
