import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MyMain } from "./index.styles";

import Banner from "../../components/Banner/Banner";
import Button1 from "../../components/Button/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "left",
  padding: "40px",
  minHeight: "100vh",

  color: theme.palette.text.secondary,
}));

function ProductDetails_c(props) {


  useEffect(() => {
 console.log(props);
 
  }, [props])
  
  return (
    <MyMain {...props} onClick={props.onClick}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        >
          <Grid item>
            <Banner imagepath={props.Product_details_data.image} />
          </Grid>
          <Grid item>
            <Item>
              <div style={{ marginBottom: "50px" }}>subimages listed here</div>
              <h2>{props.Product_details_data.title}</h2>
              <div style={{ marginBottom: "200px" }}>
                Coconut Shell Sewing Buttons Scrapbooking Two Holes Round
                Natural Flower Pattern 13mm Dia, 50 PCs
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h2>${props.Product_details_data.price}</h2>
              </div>
              <Button1
                size={"small"}
                variant="contained"
                color={"success"}
                label={"Add to cart"}
                onClick={()=>props.addToCart(props.Product_details_data)}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </MyMain>
  );
}

ProductDetails_c.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductDetails_c;
