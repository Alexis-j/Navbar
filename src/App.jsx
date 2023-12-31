import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Login from "./view/Login";
import Register from "./view/Register";
import Home from "./view/Home";
import { Route, Routes } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Login",
    path: "#login",
  },
  {
    title: "Register",
    path: "#register",
  },
];

export default function App() {
  return (
    <>
      <Navbar navLinks={navLinks}/>
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}
