

import BannerScreen2 from "../../../components/Background/Banner2"
import Carousel from "../../../components/Carousel/Carousel"
import AboutScreen from "../../../components/section/about/user/About.screen"
import MissionScreen from "../../../components/section/about/user/Mission.screen"
import DonationImpactSection from "../../../components/section/about/user/ViewImpact.screen"
import DocumentScreen from "../../../components/section/documents/user/Document.screen"
import FocusActivityScreen from "../../../components/section/focusActivity/user/FocusActivity.screen"
import GalleryScreen from "../../../components/section/gallery/user/Gallery.screen"
import ImpactScreen from "../../../components/section/Impact/user/Impact.screen"
import NewsScreen from "../../../components/section/news/user/News.screen"
import UpcomingEventScreen from "../../../components/section/upcomingEvent/user/UpcomingEvent.screen"
import VideoScreen from "../../../components/section/video/user/Video.screen"
// eslint-disable-next-line @typescript-eslint/naming-convention
function HomePage() {

  return (
    <>
      <Carousel />
      <div className="w-full flex flex-col justify-center items-center">
        <div id="about" className="w-full flex flex-col justify-center items-center scroll-mt-24"><AboutScreen /></div>
        <div id="mission" className="w-full flex flex-col justify-center items-center scroll-mt-24"><MissionScreen /></div>
        <div id="banner" className="w-full flex flex-col justify-center items-center scroll-mt-24"><BannerScreen2 /></div>
        <div id="impact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><ImpactScreen /></div>
        <div id="focusActivity" className="w-full flex flex-col justify-center items-center scroll-mt-24"><FocusActivityScreen /></div>
        <div id="upcomingEvents" className="w-full flex flex-col justify-center items-center scroll-mt-24"><UpcomingEventScreen /></div>
        <div id="documents" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DocumentScreen /></div>
        <div id="gallery" className="w-full flex flex-col justify-center items-center scroll-mt-24"><GalleryScreen /></div>
        <div id="news" className="w-full flex flex-col justify-center items-center scroll-mt-24"><NewsScreen /></div>
        <div id="video" className="w-full flex flex-col justify-center items-center scroll-mt-24"><VideoScreen /></div>
        <div id="donationImpact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DonationImpactSection /></div>
      </div>
    </>
  )
}

export default HomePage