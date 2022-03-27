import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./redux/itemSlice";
import statusReducer from "./redux/statusSlice";

export default configureStore({
  reducer: {
    item: itemReducer,
    status: statusReducer,
  },
});
