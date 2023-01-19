import React, { useEffect,useContext } from "react";
import Cart_c from "../../stories/containers/Cart/Cart_c";
import * as actions from "../../actionTypes";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import { AppContext } from "../../context/app";

const Cart = () => {
  const { userState } = useContext(UserContext);
  const { appState } = useContext(AppContext);
  const { cartState, cartDispatch } = useContext(CartContext);

  useEffect(() => {
    console.log(userState);
  }, [userState]);

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  const deacreaseItemeQuantity = (data) => {
    cartDispatch({
      type: actions.DECREASE_PRODUCT_QUANTITY,
      payload:data
    });
  };
  const increaseItemeQuantity = (data) => {
    cartDispatch({
      type: actions.INCREASE_PROUCT_QUANTITY,
      payload:data
    });
  };

  const removeProduct = (id) => {
    cartDispatch({
      type: actions.REMOVE_PRODUCT,
      payload:id
    });
  };

  return (
    <>
    <br/>
      <Cart_c
        label={"Cart"}
        data={cartState.cart}
        decrease={deacreaseItemeQuantity}
        increase={increaseItemeQuantity}
        removeItem={removeProduct}
      />
    </>
  );
};

export default Cart;
