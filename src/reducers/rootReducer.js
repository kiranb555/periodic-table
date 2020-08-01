const periodicTableData = require("../../src/components/data/periodicTable.json");

const initialState = {
  periodicTableData: periodicTableData.elements,
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
