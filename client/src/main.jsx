import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterForm from "./components/Form/Register/RegisterForm.jsx";
import LoginForm from "./components/Form/Login/LoginForm.jsx";
import GroupTripForm from "../src/components/Form/GroupTripFrom.jsx"
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux";
import AboutUs from "../src/components/AboutUs.jsx";
import Home from "./components/home/Home.jsx";
import Emergency from "./components/Emergency.jsx";
import ContactForm from "./components/ContactUs.jsx";

const store = configureStore({ reducer: authReducer });

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"contact",
        element:<ContactForm/>
      },
      
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "groupTripPost",
        element: <GroupTripForm/>,
      },
      {
        path: "groupTripForm",
        element: <GroupTripForm/>,
      },
      {
        path: "emergency",
        element: <Emergency />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
