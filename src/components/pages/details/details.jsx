import React, { Fragment } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Card from "../../card";
import "./details.style.scss";

const Details = ({ periodicTableData }) => {
  const { ID } = useParams();
  const id = ID.slice(1);
  const data = periodicTableData.filter((e) => e.number === id * 1);

  return (
    <Fragment>
      {data.length > 0 ? (
        <div className="details">
          <Card data={data[0]} />
        </div>
      ) : (
        <div className="error">
          Please select proper element. Go back to home and select element
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    periodicTableData: state.periodicTableData,
  };
};

export default connect(mapStateToProps, null)(Details);
