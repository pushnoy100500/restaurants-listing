import queryString from "query-string";

/**
 * Retrieve restaurants from public openTable API
 * @param {obj} searchObj { city: string }
 * @returns Promise
 */
export function fetchRestaurants(searchObj) {
  const { city, page } = searchObj;
  const queryStr = queryString.stringify({ city, page });
  return fetch(`http://opentable.herokuapp.com/api/restaurants?${queryStr}`, {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  }).then((respJson) => {
    return respJson;
  })
}