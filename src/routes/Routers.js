import { Routes, Route } from "react-router-dom";
import Books from "../Components/Books";
import Home from "../Components/Home";
import Users from "../Components/Users.js";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default Routers;
