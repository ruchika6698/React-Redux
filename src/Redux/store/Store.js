import { createStore } from "redux";
import { LoginReducer } from "../reducers/LoginReducer";
// store file
 
const store = createStore(
  LoginReducer
);

export default store;