import React from "react";
import "./home.style.scss";
import Cell from "../../cell";

import { connect } from "react-redux";

const Home = ({ periodicTableData }) => {
  return (
    <div className="home">
      <div className="home_periodic_table">
        {periodicTableData.map((el, i) => {
          return (
            <Cell
              key={el.name}
              name={el.name}
              symbol={el.symbol}
              number={el.number}
              xpos={el.xpos}
              ypos={el.ypos}
              category={el.category}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    periodicTableData: state.periodicTableData,
  };
};
export default connect(mapStateToProps, null)(Home);
