import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import "./style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to={"/add"}>
          <li>
            <button className="add-task">+</button>
          </li>
        </Link>
        <Link to={"/"}>
          <li>
            <button>+</button>
          </li>
        </Link>
        <li>
          <button>+</button>
        </li>
        <li>
          <button>+</button>
        </li>
        <li>
          <button>+</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
