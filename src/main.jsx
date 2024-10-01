import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.jsx";
import theme from "./mui/theme.js";
import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
