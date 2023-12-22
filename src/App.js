import React, { useState } from "react";
import "./assests/App.css";
import Dashboard from "./layout/Dashboard/Index";
import Customers from "./layout/Customers/Index";
import Products from "./layout/Products/Index";
import Statistics from "./layout/Statistics/Index";
import Navbar from "./compantes/NavBar/Index";
import Sidebar from "./compantes/Sidebar/Index";
import { useContext } from "react";

import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";

// import Api from "./Companet/Api";

const RoutePageData = [
  {
    route: "/Dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    icon: "bi bi-motherboard",
  },
  {
    route: "/Customers",
    element: <Customers />,
    name: "Customers",
    icon: "bi bi-person-fill",
  },
  {
    route: "/Products",
    element: <Products />,
    name: "Products",
    icon: "bi bi-box-seam",
  },
  {
    route: "/Statistics",
    element: <Statistics />,
    name: "Statistics",
    icon: "bi bi-sliders2-vertical",
  },
];

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`App `}>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Sidebar
            RoutePageData={RoutePageData}
            open={open}
            setOpen={setOpen}
          />
        </div>
        <div className="ms-4">
          <div style={{ width: "99.7%" }} className="row">
            <div className="col-12">
              <Navbar />
            </div>
            <div className="col-12">
              <Routes>
                {RoutePageData.map((link) => (
                  <Route path={link.route} element={link.element} />
                ))}
                <Route path="*" element={<Navigate to="/Dashboard" />} />
                {/* <Route exact path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/Home" />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {/* <Api/> */}
    </div>
  );
}

export default App;
