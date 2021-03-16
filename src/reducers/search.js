import { SEARCH_GALLERIES_DONE, SEARCH_GALLERIES_ERROR, SEARCH_GALLERIES_RESET, SEARCH_GALLERIES_START } from '../constants/actionTypes';

const initialSearch = { search: [], WIP: false, error: false };

const reducer = (search = initialSearch, action) => {
  switch (action.type) {
  case SEARCH_GALLERIES_START:
    return { search: [...search.search], WIP: true, error: false };
  case SEARCH_GALLERIES_DONE:
    return { search: action.payload, WIP: false, error: false };
  case SEARCH_GALLERIES_ERROR:
    return { search: [], WIP: false, error: action.payload.message };
  case SEARCH_GALLERIES_RESET:
    return { search: [], WIP: false, error: false };

  default:
    return search;
  }
};

export default reducer;
