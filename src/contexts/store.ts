import { configureStore } from "@reduxjs/toolkit";

import documentReducer from "./slice/getAllDocument.slice";
import focusActivityReducer from "./slice/getAllFocusActivity.slice";
import GalleryReducer from "./slice/getAllGallery.slice";
import NewsReducer from "./slice/getAllNews.slice";
import teamMemberReducer from "./slice/getAllTeamMember.slice";
import upcomingEventReducer from "./slice/getAllUpcomingEvent.slice";
import videoReducer from "./slice/getAllVideo.slice";
import userReducer from "./slice/getUser.slice";
import socialLinkAndCommonImageReducer from "./slice/socialLinkAndCommonImage.slice";
export const store = configureStore({
  reducer: {
    socialLinkAndCommonImage:socialLinkAndCommonImageReducer,
    user:userReducer,
    video:videoReducer,
    document:documentReducer,
    focusActivity:focusActivityReducer,
    gallery:GalleryReducer,
    news:NewsReducer,
    upcomingEvent:upcomingEventReducer,
    teamMember:teamMemberReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;