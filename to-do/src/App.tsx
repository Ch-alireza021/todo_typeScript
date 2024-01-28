import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import themes from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import ThemeContextProvider from "./context/ThemeProvider";
function App() {
  const client = new QueryClient({});
  const themeMode = localStorage.getItem("theme") ?? themes.dark;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContextProvider >
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default App;
