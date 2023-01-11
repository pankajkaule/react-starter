import React, { useState, Suspense, useEffect } from "react";
import { router } from "./routes/routes";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  console.log(router);
  const [isSigned, setIsSigned] = useState(false);

  const routesContainer = router.map((el) => (
    <Route path={el.path} element={el.element} />
  ));

  let navigate = useNavigate();

  useEffect(() => {
    if (isSigned) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, [isSigned]);

  return (
    <Suspense fallback={() => <h1>Loading</h1>}>
      <Routes>{routesContainer}</Routes>
    </Suspense>
  );
}

export default App;
