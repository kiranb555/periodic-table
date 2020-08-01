import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Helper from "../../helper/helper";
import "./Card.style.scss";

const Card = ({ data }) => {
  const {
    name,
    appearance,
    atomic_mass,
    boil,
    category,
    color,
    density,
    discovered_by,
    melt,
    molar_heat,
    named_by,
    number,
    period,
    phase,
    source,
    spectral_img,
    summary,
    symbol,
    shells,
    electron_configuration,
    electron_configuration_semantic,
    electron_affinity,
    electronegativity_pauling,
    ionization_energies,
  } = data;

  let colorClass = Helper.getColor(category);

  console.log(name, melt);
  console.log(data);
  return (
    <div className="card">
      <div className={`card_header ${colorClass}`}>
        <div>
          <div>{number}</div>
          <div>
            {name} ({symbol})
          </div>
          <div>
            {category} &nbsp;{" "}
            <a
              alt="periodic table element wiki link"
              href={source}
              target="_blank"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
        <div>temp</div>
      </div>
      <div className="card_body">
        <p className="card_body_summary">{summary}</p>
        <div className="card_body_table">table goes here</div>
      </div>
    </div>
  );
};

Card.protoTypes = {
  data: PropTypes.object,
};
export default Card;
