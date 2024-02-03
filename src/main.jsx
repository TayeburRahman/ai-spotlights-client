import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import "./index.css";
import { SearchProvider } from "./context/search.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
