import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RxMenuComponent from "./components/RxMenuComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <BodyComponent/>,
        errorElement: <ErrorComponent/>
      },
      {
        path:"/about",
        element: <AboutComponent/>,
        errorElement: <ErrorComponent/>
      },
      {
        path:"/contact",
        element: <ContactComponent/>,
        errorElement: <ErrorComponent/>
      },
      {
        path:"/restaurants/:rxId",
        element: <RxMenuComponent/>,
        errorElement: <ErrorComponent/>
      }
    ],
    errorElement: <ErrorComponent/>
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
