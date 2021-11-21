import { combineReducers } from "redux";
import shoppingCardReducer from "./shoppingCardReducer";

const reducers = combineReducers({
  shoppingCard: shoppingCardReducer,
});

export default reducers;
