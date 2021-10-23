import React from "react";
import CartesianChart from "./CartesianChart";
import Logout from "./Logout";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Logout />
      <h2 className="home___title">Homepage</h2>

      <div className="chart___container">
        <CartesianChart />
      </div>
    </div>
  );
};

export default Homepage;
