import React from "react";
import PropTypes from "prop-types";
import { MyCart,MyMobileCart } from "./index.styles";
import { Button, Grid, Paper } from "@mui/material";
import Button1 from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Cart_c(props) {
  console.log(props);

  return (
    <div >
    <MyCart elevation={5} {...props} onClick={props.onClick}>
      <Grid container justifyContent={"flex-end"}>
        <Link to={"/checkout"}>
          <Button1
            size={"small"}
            variant="contained"
            color={"success"}
            label={"Checkout"}
          />
        </Link>
      </Grid>
      <h1> {props.label}</h1>

      <br />
      <br />
      <br />
      <br />
      {props.data.length > 0 ? (
        props.data.map((data) => (
          <div >
          {/* <Paper
        
            elevation={5}
            style={{ display: "flex", padding: "20px", marginBottom: "20px" }}
          > */}
        <MyMobileCart>
              <div   >
                <img
                  width={150}
                  height={200}
                  className="list-item-image"
                  src={data.image}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div>
                  <h3>{data.author}</h3>
                </div>
                <span>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <b>Price : </b> $ {data.price.toFixed(2)} <br />
                    {data.count > 1 && (
                      <>
                        <span style={{ marginLeft: "1rem" }}>
                          <b>Count: </b>
                          {data.count}
                        </span>
                        <span style={{ marginLeft: "1rem" }}>
                          <b>Total:</b> $ {(data.price * data.count).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>
                </span>
                <br />
                <div>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => props.decrease(data)}
                    className="cart-btn"
                  >
                    -
                  </Button>
                  &ensp;
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => props.removeItem(data.id)}
                    className="remove-btn"
                  >
                    delete
                  </Button>
                  &ensp;
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    onClick={() => props.increase(data)}
                    className="cart-btn"
                  >
                    {" "}
                    +{" "}
                  </Button>
                </div>
              </div>
              </MyMobileCart>
            {/* </Paper> */}
      
          </div>
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </MyCart>
    </div>
  );
}

Cart_c.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Cart_c;
