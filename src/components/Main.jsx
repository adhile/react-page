import React from "react";
import bullet from "../assets/Ellipse 1.png";
import vector from "../assets/reactjs-icon 2.png";

export default function () {
  return (
    <div className="section0">
      <div className="section2">
        <h1>Fun facts about React</h1>
        <div className="list-items">
          <div className="image-list">
            <img src={bullet} alt="" className="src" />
            <img src={bullet} alt="" className="src" />
            <img src={bullet} alt="" className="src" />
            <img src={bullet} alt="" className="src" />
            <img src={bullet} alt="" className="src" />
          </div>
          <div className="list">
            <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>
                Powers thousands of enterprise apps, including mobile apps
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="vector-comp">
        <img src={vector} alt="" className="vector" />
      </div>
    </div>
  );
}
