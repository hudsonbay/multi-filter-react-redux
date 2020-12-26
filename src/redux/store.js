import { createStore } from "redux";

import database from "../db/database";

import { FILTER_BY_NAME, FILTER_BY_SALE_PRICE } from "../redux/actions";

const initialState = {
  database: database,
  filteredDatabase: database,
  appliedFilters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME: {
      //clone the state
      let newState = Object.assign({}, state);

      //the value received from our presentational component
      let match = action.payload;

      let filteredValues = state.database.filter((q) => {
        return q.title.toLowerCase().includes(match.toLowerCase());
      });

      let appliedFilters = state.appliedFilters;
      //if the value from the input box is not empty
      if (match !== "") {
        //check if the filter already exists in the tracking array
        let index = appliedFilters.indexOf("FILTER_BY_NAME");
        if (index === -1)
          //if it doesn’t, add it.
          appliedFilters.push("FILTER_BY_NAME");
        //change the filtered products to reflect the change
        newState.filteredDatabase = filteredValues;
      } else {
        //if the value is empty, we can assume everything has been erased
        let index = appliedFilters.indexOf("FILTER_BY_NAME");
        //in that case, remove the current filter
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          //if there are no filters applied, reset the products to normal.
          newState.filteredDatabase = newState.database;
        }
      }
      return newState;
    }

    case FILTER_BY_SALE_PRICE: {
      //clone the state
      let newState = Object.assign({}, state);

      //the value received from our presentational component
      let match = action.payload;

      let filteredValues = state.database.filter((q) => {
        return q.salePrice < match;
      });

      let appliedFilters = state.appliedFilters;
      //if the value from the input box is not empty
      if (match !== "") {
        //check if the filter already exists in the tracking array
        let index = appliedFilters.indexOf("FILTER_BY_SALE_PRICE");
        if (index === -1)
          //if it doesn’t, add it.
          appliedFilters.push("FILTER_BY_SALE_PRICE");
        //change the filtered products to reflect the change
        newState.filteredDatabase = filteredValues;
      } else {
        //if the value is empty, we can assume everything has been erased
        let index = appliedFilters.indexOf("FILTER_BY_SALE_PRICE");
        //in that case, remove the current filter
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          //if there are no filters applied, reset the products to normal.
          newState.filteredDatabase = newState.database;
        }
      }
      return newState;
    }

    default:
      return state;
  }
};

export default createStore(reducer);
