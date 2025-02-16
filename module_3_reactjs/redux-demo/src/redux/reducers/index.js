import { combineReducers } from "redux";
import { countReducer } from "./CountReducer";

const rootReducer = combineReducers({
  count:countReducer,
});

export default rootReducer;
