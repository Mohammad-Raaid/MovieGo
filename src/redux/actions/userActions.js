import * as actionTypes from "../actionTypes/actionTypes";

export const setUser = (payload) => ({
  type: actionTypes.SET_USER,
  payload,
});
export const addToFavorite = (payload) => ({
  type: actionTypes.ADD_TO_FAVORITE,
  payload,
});
export const removeFavorite = (payload) => ({
  type: actionTypes.REMOVE_FROM_FAVORITE,
  payload,
});
export const setFilters = (payload) => ({
  type: actionTypes.SET_FILTER,
  payload,
});
export const clearSession = () => ({
  type: actionTypes.CLEAR_SESSION,
});
