import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar">
      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li className="active">
          <Link href="#">News</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
