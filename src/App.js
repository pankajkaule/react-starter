import React, { Suspense, useContext } from "react";
import { router } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import SaleBanner from "./stories/containers/SaleBanner/SaleBanner";
import Navbar from "./stories/containers/Navbar/Navbar";
import Footer from "./stories/containers/Footer/Footer";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import "./App.css";
import { CartContext } from "./context/cart";
function App() {

  const routesContainer = router.map((el) => (
    <Route path={el.path} element={el.element} />
  ));

  // theme
  const theme = createTheme();

  const { cartState } = useContext(CartContext);

  return (
    <>
      <Suspense fallback={() => <h1>Loading</h1>}>
      <ThemeProvider theme={theme}>
      
          <SaleBanner label={"Sale Banner"} />
          <Navbar itemCount={cartState.cart.length} label={"Nav Bar"} />
          <Routes>{routesContainer}</Routes>
          <Footer label={"footer"} />
        
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
