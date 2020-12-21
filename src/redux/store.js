import { createStore } from "redux";

import database from "../db/database";

const initialState = {
  database: database,
  filteredDatabase: database,
  appliedFilters: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
