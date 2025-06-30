import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/getUserSlice";
import serviceReducer from "./slice/serviceSlice";
import socialLinkReducer from "./slice/socialLinkSlice";
export const store = configureStore({
  reducer: {
    service: serviceReducer,
    socialLink:socialLinkReducer,
    user:userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;