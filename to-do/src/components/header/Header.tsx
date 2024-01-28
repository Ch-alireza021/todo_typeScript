import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, IconButton, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PATH } from "../../config/router/routerConfig";
import ThemeContext from "../../context/ThemeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const LinkStyle = styled("div")(() => ({
  ".linkOut": {
    textDecoration: "none",
    color: "inherit",
  },
  ".link": {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "red",
    },
  },
  ".active": {
    color: "red",
    textDecoration: "none",
  },
}));

const Header = () => {
  const theme = React.useContext(ThemeContext);
  const mode = theme.theme;
  const toggleColorMode = theme.toggleColorMode;
  return (
    <React.Fragment>
      <AppBar>
        <LinkStyle>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Typography variant="h6" component="div">
                TO DO LIST
              </Typography>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
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
};

export default Header;
