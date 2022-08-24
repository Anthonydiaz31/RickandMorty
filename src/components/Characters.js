import React from "react";

function Characters(props) {
  return (
    <div className="wrap">
      <div className="Character-Container">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.status}</p>
        <p>{props.species}</p>
      </div>
    </div>
  );
}

export default Characters;
