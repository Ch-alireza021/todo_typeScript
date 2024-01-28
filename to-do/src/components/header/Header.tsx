import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PATH } from "../../config/router/routerConfig";

const LinkStyle=styled("div")(()=>({
    ".linkOut": {
        textDecoration: "none",
        color: "inherit",
      },
      ".link": {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          color:"red",
        },
      },
      ".active": {
        color: "red",
        textDecoration: "none",
      },
}))

const Header=()=> {
  return (
    <React.Fragment>
      <AppBar>
        <LinkStyle>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6" component="div">
           TO DO LIST
          </Typography>
          <Box display={"flex"} gap={"1rem"}>
            <NavLink to={PATH.HOME} className={"link"}> 
                HOME
            </NavLink>
            <NavLink to={PATH.TODO} className={"link"}>
                TODO
            </NavLink>
          </Box>
        </Toolbar>
        </LinkStyle>
      </AppBar>
    </React.Fragment>
  );
}

export default Header