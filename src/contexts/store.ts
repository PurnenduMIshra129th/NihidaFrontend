import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/getUserSlice";
import socialLinkAndCommonImageReducer from "./slice/socialLinkAndCommonImageSlice";
export const store = configureStore({
  reducer: {
    socialLinkAndCommonImage:socialLinkAndCommonImageReducer,
    user:userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;