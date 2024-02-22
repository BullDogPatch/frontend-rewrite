import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    // path='/',
    path: "*",
    element: <App />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
