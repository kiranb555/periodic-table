import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Helper from "../../helper/helper";
import "./Card.style.scss";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    name,
    atomic_mass,
    boil,
    category,
    density,
    discovered_by,
    melt,
    molar_heat,
    number,
    period,
    source,
    summary,
    symbol,
    shells,
    electron_configuration,
    electron_configuration_semantic,
    electron_affinity,
    electronegativity_pauling,
  } = data;

  let colorClass = Helper.getColor(category);

  return (
    <div className="card">
      <div className={`card_header ${colorClass}`}>
        <div className="card_header_content1">
          <span className="back">
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
          </span>
          <div className="num">{number}</div>
          <div className="name">
            {name} ({symbol})
          </div>
          <div className="cat">
            {category} <br />
            <a
              alt="periodic table element wiki link"
              title="know more / wiki"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
        {melt && boil && (
          <div className="card_header_content2">
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/dew-point.png"
                title="melting point"
                alt="melting point"
              />
              <br />
              <span>{melt}K</span>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/temperature-sensitive.png"
                title="boiling point"
                alt="boiling point"
              />
              <br />
              <span>{boil}K</span>
            </div>
          </div>
        )}
      </div>
      <div className="card_body">
        <p className="card_body_summary">{summary}</p>

        <div className="card_body_table">
          <table>
            <tbody>
              <tr>
                <td>Period</td>
                <td>{period}</td>
              </tr>
              <tr>
                <td>Atomic Mass</td>
                <td>{atomic_mass}</td>
              </tr>
              <tr>
                <td>Density</td>
                <td>{density}</td>
              </tr>
              <tr>
                <td>Molar heat</td>
                <td>{molar_heat}</td>
              </tr>
              <tr>
                <td>Discovery by</td>
                <td>{discovered_by}</td>
              </tr>
              <tr>
                <td>Electron Affinity</td>
                <td>{electron_affinity}</td>
              </tr>
              <tr>
                <td>Electron Configuration</td>
                <td>{electron_configuration}</td>
              </tr>
              <tr>
                <td>Electron Configuration Semantic</td>
                <td>{electron_configuration_semantic}</td>
              </tr>
              <tr>
                <td>Electronegativity Pauling</td>
                <td>{electronegativity_pauling}</td>
              </tr>
              <tr>
                <td>Shells</td>
                <td>[{`${shells}`}]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Card.protoTypes = {
  data: PropTypes.object,
};
export default Card;
