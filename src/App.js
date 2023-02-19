import "bootstrap/dist/css/bootstrap.css";
import Routers from "./routes/Routers.js";
import NavScrollExample from "./Header/navbar.js";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log("Render after test state is been updated");
  }, []);

  return (
    <div className="App">
      <NavScrollExample />
      <Routers />
    </div>
  );
}

export default App;
