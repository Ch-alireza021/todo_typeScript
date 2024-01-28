import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { FC, useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import { ThemeContext } from "@emotion/react";

const Layout:FC = () => {
  return (
    <>
      <Header />
      <Container sx={{width:"100vw",height:"100vh"}}>
        <Outlet/>
      </Container>
    </>
  );
};

export default Layout;
