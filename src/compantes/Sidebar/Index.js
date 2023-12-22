import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assests/sidebar.css";
import { Icon } from "@iconify/react";
import Logo from "../../Image/logo.svg";
import { Context } from "../Context";

function Index({ RoutePageData, open, setOpen }) {
  const { bg } = useContext(Context);
  return (
    <div
      style={{
        width: open ? "300px" : "80px",
      }}
      className="sidebar"
    >
      <div className="logo py-5">
        <p
          style={{
            display: open ? "block" : "none",
          }}
          className="logoTitle"
        >
          <img src={Logo} />
        </p>

        <Icon
          style={{ color: bg }}
          onClick={() => setOpen(!open)}
          className="logoIcon"
          icon={`${open ? "bx:menu-alt-right" : "bx:menu"}`}
        />
      </div>
      <div className="menu">
        <NavLink>
          <ul>
            {RoutePageData.map((page) => (
              <Link to={page.route}>
                <li className="listSidebar">
                  <i className={page.icon}></i>
                  <h4
                    style={{
                      display: open ? "block" : "none",
                    }}
                  >
                    {page.name}
                  </h4>
                </li>
              </Link>
            ))}
          </ul>
        </NavLink>
      </div>
    </div>
  );
}

export default Index;

{
  /* <ul>
          {RoutePageData.map((page) => (
            <Link aria-current="page" to={page.route}>
              <li className="listSidebar">
                <i className={page.icon}></i>
                <h4
                  style={{
                    display: open ? "block" : "none",
                  }}
                >
                  {page.name}
                </h4>
              </li>
            </Link>
          ))}
        </ul> */
}
