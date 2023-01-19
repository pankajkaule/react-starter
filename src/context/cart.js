import React, { createContext, useReducer,useContext } from 'react';
import PropTypes from 'prop-types';
import cartReducer from '../reducers/cartReducer';
import cartStore from '../stores/cartStore';

export const CartContext = createContext(cartStore);


const CartStore = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartStore);
  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartStore;
