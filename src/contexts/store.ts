import { configureStore } from "@reduxjs/toolkit";

import serviceReducer from "./slice/serviceSlice";
import socialLinkReducer from "./slice/socialLinkSlice";
export const store = configureStore({
  reducer: {
    service: serviceReducer,
    socialLink:socialLinkReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;