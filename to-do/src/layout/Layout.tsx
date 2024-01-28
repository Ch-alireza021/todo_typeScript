import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { FC } from "react";


const Layout:FC = () => {
  return (
    <>
      <Header />
      <Container sx={{width:"100vw",height:"100vh",paddingTop:"70px"}}>
        <Outlet/>
      </Container>
    </>
  );
};

export default Layout;
