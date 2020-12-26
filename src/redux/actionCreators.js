import { FILTER_BY_NAME, FILTER_BY_SALE_PRICE } from "../redux/actions";

const filterByName = (payload) => ({
  type: FILTER_BY_NAME,
  payload,
});

const filterBySalePrice = (payload) => ({
  type: FILTER_BY_SALE_PRICE,
  payload,
});

export { filterByName, filterBySalePrice };
