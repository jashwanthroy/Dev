import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Aboutpage from "./src/components/Aboutpage";
import Contactus from "./src/components/Contactus";
import ErrorElement from "./src/components/ErrorElement";
import Menupage from "./src/components/Menupage";
import Shimmer from "./src/components/Shimmer";
// import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/components/Cart";

const Grocery = lazy(()=> import("./src/components/Grocery"))
const Application = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      },
      {
        path: "/menu/:resId",
        element: <Menupage />,
      },{
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <ErrorElement />,
  },
],{
  future:{
    v7_normalizeFormMethod: true,
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider future={{
  v7_startTransition : true,
}}router={appRouter} />);
