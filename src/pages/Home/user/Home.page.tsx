import React from "react";

import Banner2 from "../../../components/Background/Banner2";
import Carousel from "../../../components/Carousel/Carousel";
import AboutScreen from "../../../components/section/about/user/About.screen";
import MissionScreen from "../../../components/section/about/user/Mission.screen";


// eslint-disable-next-line @typescript-eslint/naming-convention
const ImpactScreen = React.lazy(() => import("../../../components/section/Impact/user/Impact.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityScreen = React.lazy(() => import("../../../components/section/focusActivity/user/FocusActivity.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventScreen = React.lazy(() => import("../../../components/section/upcomingEvent/user/UpcomingEvent.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentScreen = React.lazy(() => import("../../../components/section/documents/user/Document.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const GalleryScreen = React.lazy(() => import("../../../components/section/gallery/user/Gallery.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsScreen = React.lazy(() => import("../../../components/section/news/user/News.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const VideoScreen = React.lazy(() => import("../../../components/section/video/user/Video.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const DonationImpactSection = React.lazy(() => import("../../../components/section/about/user/ViewImpact.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const PartnerSection = React.lazy(() => import("../../../components/section/ourPartner/user/OurPartner.screen"));
// eslint-disable-next-line @typescript-eslint/naming-convention
function HomePage() {

  return (
    <>
      <Carousel />
      <div className="w-full flex flex-col justify-center items-center">
        <div id="about" className="w-full flex flex-col justify-center items-center scroll-mt-24"><AboutScreen /></div>
        <div id="mission" className="w-full flex flex-col justify-center items-center scroll-mt-24"><MissionScreen /></div>
        <div id="banner" className="w-full flex flex-col justify-center items-center scroll-mt-24"><Banner2 /></div>
        <div id="impact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><ImpactScreen /></div>
        <div id="focusActivity" className="w-full flex flex-col justify-center items-center scroll-mt-24"><FocusActivityScreen /></div>
        <div id="upcomingEvents" className="w-full flex flex-col justify-center items-center scroll-mt-24"><UpcomingEventScreen /></div>
        <div id="documents" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DocumentScreen /></div>
        <div id="gallery" className="w-full flex flex-col justify-center items-center scroll-mt-24"><GalleryScreen /></div>
        <div id="news" className="w-full flex flex-col justify-center items-center scroll-mt-24"><NewsScreen /></div>
        <div id="video" className="w-full flex flex-col justify-center items-center scroll-mt-24"><VideoScreen /></div>
        <div id="donationImpact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DonationImpactSection /></div>
        <div id="partner" className="w-full flex flex-col justify-center items-center scroll-mt-24"><PartnerSection /></div>
      </div>
    </>
  )
}

export default HomePage