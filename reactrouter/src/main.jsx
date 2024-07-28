import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {RouterProvider,createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import Layout from "./Layout.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubinfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>

//       },{
//         path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

// another syntax with route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubinfoLoader} path="Github" element={<Github/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
