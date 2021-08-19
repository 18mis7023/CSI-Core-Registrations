import React from "react";
import "../assets/css/NotFound.css";
import { ReactComponent as SVG } from "../assets/images/404.svg";

function NotFound() {
  return (
    <div className="notfound">
      <SVG />
    </div>
  );
}

export default NotFound;
