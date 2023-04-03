import React from "react";
import logoNCC from "../Image/logoNCC.png";
import cssIcon from "../Image/css-icon.png";
import htmlIcon from "../Image/html-icon.png";
import urlIcon from "../Image/url-icon.png";
import Card from "./Card";

function Contents() {
  return (
    <div className="content">
      <div className="logo">
        <button id="toggle-menu">
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
        <img id="logo" width={"310px"} height={"122px"} src={logoNCC} alt="logo" />
      </div>
      <div className="section1">
        <h4>Lorem ipsum dolor sit asmet?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
          Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
          turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo.
          Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum.
          Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio
          neque, sed semper turpis pellentesque a.
        </p>
      </div>
      <div className="section2">
        <Card img={cssIcon} />
        <Card img={htmlIcon} />
        <Card img={urlIcon} />
      </div>
    </div>
  );
}

export default Contents;
