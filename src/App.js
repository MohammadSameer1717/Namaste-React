import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import RestaurantPage from "./components/RestaurantPage.js";

//lazy loading
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading . . . . .</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/CartItems",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading . . . . .</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);