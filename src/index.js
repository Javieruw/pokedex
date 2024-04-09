import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PokemonCard from "./PokemonCard/PokemonCard";
import AboutMe from "./AboutMe/AboutMe";
import Pokadex from "./Pokadex/Pokadex";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/pokadex",
        element: <Pokadex />,
      },
    ],
  },
]);

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MantineProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
