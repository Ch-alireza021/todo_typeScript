import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Header=()=> {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6" component="div">
           TO DO LIST
          </Typography>
          <Box display={"flex"} gap={"1rem"}>
            <Typography>
                HOME
            </Typography>
            <Typography>
                TODO
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header