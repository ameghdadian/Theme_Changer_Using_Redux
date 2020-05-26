import { combineReducers } from "redux";

import boxReducer from "./box/box.reducer";

export default combineReducers({
  box: boxReducer,
});
