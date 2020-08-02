import React from "react";
import "./cell.style.scss";
import { Link } from "react-router-dom";
import Helper from "../../helper/helper";

function Cell({ name, number, symbol, xpos, ypos, category }) {
  let colorClass = Helper.getColor(category);
  return (
    <div
      className={`cell ${colorClass}`}
      style={{ gridColumn: xpos, gridRow: ypos }}
    >
      <Link to={`/details:${number}`}>
        <div>{number}</div>
        <div className="symbol">{symbol}</div>
        <small className="name">{name}</small>
      </Link>
    </div>
  );
}

export default Cell;
