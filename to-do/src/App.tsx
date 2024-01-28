import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import themes from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
function App() {
  
  const isTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(isTheme ? isTheme : "dark");
  const themeMode = theme === "dark" ? themes.dark : themes.light;
  const client = new QueryClient({});

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
