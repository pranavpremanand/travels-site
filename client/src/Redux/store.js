import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";

const store = configureStore({
  reducer: { admins: adminSlice },
});

export default store;
