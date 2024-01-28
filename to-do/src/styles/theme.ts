import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "#11161b",
          color:"#fff"
        },
      },
    },
  },
});

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#888", // "#556cd6"
    },
    secondary: {
      main: "#000", // "#19857b"
    },
    error: {
      main: red.A400,
    },
  },
  components:{
    MuiContainer:{
        styleOverrides:{
            root:{
                background:"fff",
            }
        }
    }
  }
});

interface Theme {
  dark: object;
  light: object;
  [key: string]: object;
}

const themes: Theme = { dark, light };
export default themes;
