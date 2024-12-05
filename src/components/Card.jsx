import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        
        <h2 className="name">{props.name}</h2>
        <Avatar img ={props.img}/>
      </div>
      <div className="bottom">
        <div className="info">
          <Detail detailinfo={props.tel} />
          <Detail detailinfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;