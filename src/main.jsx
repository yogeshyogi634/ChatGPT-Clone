import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.jsx";
import ChatPage from "./pages/chatpage/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SignInPage from "./pages/signInPage/SignInPage.jsx";
import SignUpPage from "./pages/signUpPage/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
