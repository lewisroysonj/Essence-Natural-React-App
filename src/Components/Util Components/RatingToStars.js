/** @format */

import React from "react";

import fullStar from "./Assets/fullStar.svg";
import halfStar from "./Assets/halfStar.svg";
import nullStar from "./Assets/nullStar.svg";

export default function RatingsToStars(props) {
  return (
    <>
      {props.rating > 0.5 ? <img src={fullStar}></img> : props.rating <= 0.5 && props.rating > 0 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
      {props.rating > 1.5 ? <img src={fullStar}></img> : props.rating <= 1.5 && props.rating > 1 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
      {props.rating > 2.5 ? <img src={fullStar}></img> : props.rating <= 2.5 && props.rating > 2 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
      {props.rating > 3.5 ? <img src={fullStar}></img> : props.rating <= 3.5 && props.rating > 3 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
      {props.rating > 4.5 ? <img src={fullStar}></img> : props.rating <= 4.5 && props.rating > 4 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
    </>
  );
}
