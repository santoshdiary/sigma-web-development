import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./Layout.jsx";
import Github, { githubInfoLoader } from "./pages/Github.jsx";
import User from "./pages/User.jsx";
import { More } from "./pages/More.jsx";
import More1 from "./pages/More1.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> {/* creating different routes inside the Route(Nested Routing) */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} /> {/*dynamic routing*/}
      <Route path="github" loader={githubInfoLoader} element={<Github />} />
      
      <Route path="More" element={<More/>}>
          <Route path='More1' element={<More1/>}/>
      </Route> 

     <Route path="Home" element={<Home/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);