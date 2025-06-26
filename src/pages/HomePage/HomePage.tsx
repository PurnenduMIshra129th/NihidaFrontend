
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Carousel from "../../components/Carousel/Carousel"
import { fetchSocialLink } from "../../contexts/slice/socialLinkSlice"
import { AppDispatch } from "../../contexts/store"
import AboutScreen from "../../screens/About/AboutScreen"
import MissionScreen from "../../screens/About/MissionScreen"
import DonationImpactSection from "../../screens/About/ViewImpactScreen"
import BannerScreen2 from "../../screens/Background/BannerScreen2"
import BlogScreen from "../../screens/Blog/BlogScreen"
import FocusActivityScreen from "../../screens/FocusActivty/FocusActivity.screen"
import ImpactScreen from "../../screens/Impact/ImpactScreen"
import MediaScreen from "../../screens/Media/MediaScreen"
import NewsScreen from "../../screens/News/NewsScreen"
import ProductAndServiceScreen from "../../screens/ProductAndService/ProductAndServiceScreen"
import VideoScreen from "../../screens/Video/VideoScreen"
// eslint-disable-next-line @typescript-eslint/naming-convention
function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSocialLink());
  }, [dispatch]);
  return (
    <>
      <Carousel />
      <div className="w-full flex flex-col justify-center items-center">
        <div id="about" className="w-full flex flex-col justify-center items-center scroll-mt-24"><AboutScreen /></div>
        <div id="mission" className="w-full flex flex-col justify-center items-center scroll-mt-24"><MissionScreen /></div>
        <div id="banner" className="w-full flex flex-col justify-center items-center scroll-mt-24"><BannerScreen2 /></div>
        <div id="impact" className="w-full flex flex-col justify-center items-center scroll-mt-24"><ImpactScreen /></div>
        <div id="focusActivity" className="w-full flex flex-col justify-center items-center scroll-mt-24"><FocusActivityScreen /></div>
        <div id="blog" className="w-full flex flex-col justify-center items-center scroll-mt-24"><BlogScreen /></div>
        <div id="blog" className="w-full flex flex-col justify-center items-center scroll-mt-24"><DonationImpactSection /></div>
        <div id="media" className="w-full flex flex-col justify-center items-center scroll-mt-24"><MediaScreen /></div>
        <div id="services" className="w-full flex flex-col justify-center items-center scroll-mt-24"> <ProductAndServiceScreen /></div>
        <div id="news" className="w-full flex flex-col justify-center items-center scroll-mt-24"><NewsScreen /></div>
        <div id="videos" className="w-full flex flex-col justify-center items-center scroll-mt-24"><VideoScreen /></div>
      </div>
    </>
  )
}

export default HomePage