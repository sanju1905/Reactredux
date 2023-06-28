import { createStore } from "redux";
import laptopReducer from "./reducers/Laptop_reducer";
const store =createStore(laptopReducer);
export default store;