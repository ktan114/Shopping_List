import axios from "axios";

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const addItem = item => dispatch => {
  axios
    .post("/api/items", item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const setItemLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
