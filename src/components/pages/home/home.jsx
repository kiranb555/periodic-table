import React from "react";
import { connect } from "react-redux";
import Cell from "../../cell";
import "./home.style.scss";

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
