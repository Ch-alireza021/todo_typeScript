import { createContext } from "react";

const ThemeContext = createContext({
    theme:"dark",
    setTheme:(_theme:string)=> {}
});
export default ThemeContext;



