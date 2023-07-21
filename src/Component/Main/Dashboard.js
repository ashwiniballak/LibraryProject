import React from "react";
import imageLogo from "../../Images/logo.png"
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
      
          <div className=" col-2  sidebar" style={{ height: "98vh" }}>
            <div className="row" style={{width:"100%", margin:"0", padding:"0"}}>
            <div className="col-12" style={{width:"100%", margin:"0", padding:"0"}}>
          <img src={imageLogo} style={{width:"100%", margin:"0", padding:"0"}}/>
          </div>
          </div>
          <div className="row">
          <div className="col-12">
            <a>
              <NavLink to="/dashboard/book-list">Book List</NavLink>
            </a>
            <a>
              <NavLink to="/dashboard/user-list">User List</NavLink>
            </a>
            <a>
              <NavLink to="/dashboard/issue-book-data">Issue Book</NavLink>
            </a>
            </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12" style={{ margin: 0, padding: 0 }}>
                <nav
                  className="navbar"
                  style={{
                    backgroundColor: "cadetblue",
                    color: "white",
                    width: "100%",
                    textAlign: "center",
                    height:"9vh"
                  }}
                >
                  <div className="container">
                   
                    <marquee > <h4>WELCOME TO RACHIT JIRE LIBRARY</h4></marquee>
                  </div>
                </nav>
              </div>
            </div>
            {/* https://github.com/lwfinger/rtw88.git */}
            <div className="row">
              <div className="col-12 ">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
