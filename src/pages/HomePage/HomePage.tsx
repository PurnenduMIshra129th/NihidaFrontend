
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Carousel from "../../components/Carousel/Carousel"
import { fetchSocialLink } from "../../contexts/slice/socialLinkSlice"
import { AppDispatch } from "../../contexts/store"
import AboutScreen from "../../screens/About/AboutScreen"
import BlogScreen from "../../screens/Blog/BlogScreen"
import CountUpScreen from "../../screens/CountUP/CountUpScreen"
import FeedbackScreen from "../../screens/Feedback/FeedbackScreen"
import FooterScreen from "../../screens/Footer/FooterScreen"
import MediaScreen from "../../screens/Media/MediaScreen"
import NewsScreen from "../../screens/News/NewsScreen"
import ProductAndServiceScreen from "../../screens/ProductAndService/ProductAndServiceScreen"
import NewsSubscribeScreen from "../../screens/Subscribe/NewsSubscribeScreen"
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
        <div id="about" className="w-full flex flex-col justify-center items-center"><AboutScreen /></div>
        <div id="blog" className="w-full flex flex-col justify-center items-center"><BlogScreen /></div>
        <div id="media" className="w-full flex flex-col justify-center items-center"><MediaScreen /></div>
        <div id="services" className="w-full flex flex-col justify-center items-center"> <ProductAndServiceScreen /></div>
        <div id="news" className="w-full flex flex-col justify-center items-center"><NewsScreen /></div>
        <div id="videos" className="w-full flex flex-col justify-center items-center"><VideoScreen /></div>
        {/* 
        <AboutScreen />
        <BlogScreen />
        <MediaScreen />
        <ProductAndServiceScreen />
        <NewsScreen />
        <VideoScreen /> */}
        <FeedbackScreen />
        <CountUpScreen />
        <NewsSubscribeScreen />
        <FooterScreen />
      </div>
    </>
  )
}

export default HomePage