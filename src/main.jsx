import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthContextProvider from "./Providers/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-7xl mx-auto font-serif">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>{" "}
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
