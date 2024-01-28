import { createContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleColorMode: () => {},
});
export default ThemeContext;
