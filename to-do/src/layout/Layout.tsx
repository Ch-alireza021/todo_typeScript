import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { FC, useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import { ThemeContext } from "@emotion/react";

const Layout:FC = () => {
    const theme=useContext(ThemeContext)
    console.log(theme);
    

  return (
    <>
      <Header />
      <Container sx={{background:"red",width:"100vw",height:"100vh"}}>
        <Outlet/>
      </Container>
    </>
  );
};

export default Layout;
