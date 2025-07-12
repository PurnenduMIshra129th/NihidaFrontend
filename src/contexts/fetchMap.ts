import { AsyncThunk } from "@reduxjs/toolkit";

import { IDocumentApiResponse, IFocusActivityApiResponse, IGalleryApiResponse, INewsApiResponse, ISocialLinkAndCommonImageApiResponse, IUpcomingEventApiResponse, IVideoApiResponse } from "../types/api/api.type";
import { fetchAllDocument } from "./slice/getAllDocument.slice";
import { fetchAllFocusActivity } from "./slice/getAllFocusActivity.slice";
import { fetchAllGallery } from "./slice/getAllGallery.slice";
import { fetchAllNews } from "./slice/getAllNews.slice";
import { fetchAllUpcomingEvent } from "./slice/getAllUpcomingEvent.slice";
import { fetchAllVideo } from "./slice/getAllVideo.slice";
import { fetchSocialLinkAndCommonImage } from "./slice/socialLinkAndCommonImage.slice";
import { RootState } from "./store";

export type ResourceThunkMapType = {
  document: AsyncThunk<IDocumentApiResponse[] | null, undefined, { state: RootState }>;
  gallery: AsyncThunk<IGalleryApiResponse[] | null, undefined, { state: RootState }>;
  video: AsyncThunk<IVideoApiResponse[] | null, undefined, { state: RootState }>;
  focusActivity: AsyncThunk<IFocusActivityApiResponse[] | null, undefined, { state: RootState }>;
  news: AsyncThunk<INewsApiResponse[] | null, undefined, { state: RootState }>;
  socialLinkAndCommonImage: AsyncThunk<ISocialLinkAndCommonImageApiResponse[] | null, undefined, { state: RootState }>
  upcomingEvent: AsyncThunk<IUpcomingEventApiResponse[] | null, undefined, { state: RootState }>
};

export const resourceThunkMap: ResourceThunkMapType = {
  document: fetchAllDocument,
  gallery: fetchAllGallery,
  video: fetchAllVideo,
  focusActivity: fetchAllFocusActivity,
  news: fetchAllNews,
  socialLinkAndCommonImage: fetchSocialLinkAndCommonImage,
  upcomingEvent: fetchAllUpcomingEvent
};
export type ResourceKey = keyof typeof resourceThunkMap;



