import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./spinner.style.scss";

function Spinner() {
  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
}

export default Spinner;
