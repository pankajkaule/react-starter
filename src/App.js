import React, {  Suspense } from "react";
import { router } from "./routes/routes";
import { Route, Routes } from "react-router-dom";

function App() {

  const routesContainer = router.map((el) => (
    <Route path={el.path} element={el.element} />
  ));




  return (
    <Suspense fallback={() => <h1>Loading</h1>}>
      <Routes>{routesContainer}</Routes>
    </Suspense>
  );
}

export default App;
