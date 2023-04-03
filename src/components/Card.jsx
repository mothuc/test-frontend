import React from "react";

function Card({ img }) {
  return (
    <div className="card">
      <p className="card-heading">Lorem ipsum dolor sit amet</p>
      <div className="card-body">
        <p className="card-content">
          <img src={img} width={"128px"} height={"128px"} alt="CSS" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
          libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum
          velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam
          egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus
          bibendum congue. Pellentesque ultrices vestibulum mattis.
        </p>
      </div>
    </div>
  );
}

export default Card;
