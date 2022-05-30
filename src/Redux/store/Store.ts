import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/RootReducer";


const store = legacy_createStore(rootReducer);
console.log(store);
debugger
export default store;