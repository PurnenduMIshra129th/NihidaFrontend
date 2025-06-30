

import Carousel from "../../../components/Carousel/Carousel"
import FocusActivityScreen from "../../../components/section/focusActivity/user/FocusActivity.screen"
import UpcomingEventScreen from "../../../components/section/upcomingEvent/user/UpcomingEvent.screen"
import AboutScreen from "../../../screens/About/AboutScreen"
import MissionScreen from "../../../screens/About/MissionScreen"
import DonationImpactSection from "../../../screens/About/ViewImpactScreen"
import BannerScreen2 from "../../../screens/Background/BannerScreen2"
import ImpactScreen from "../../../screens/Impact/ImpactScreen"
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
        <div id="donationImpact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DonationImpactSection /></div>
      </div>
    </>
  )
}

export default HomePage