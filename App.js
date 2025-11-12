import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Aboutpage from "./src/components/Aboutpage";
import Contactus from "./src/components/Contactus";
const Application = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
  },
  {
    path: "/about",
    element: <Aboutpage />
  },
  {
    path: "/contact",
    element: <Contactus />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
