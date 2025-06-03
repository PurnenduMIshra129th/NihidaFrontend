
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Carousel from "../../components/Carousel/Carousel"
import { fetchSocialLink } from "../../contexts/slice/socialLinkSlice"
import { AppDispatch } from "../../contexts/store"
import BlogPage from "../BlogPage/BlogPage"
import CountUpPage from "../CountUpPage/CountUpPage"
import FeedbackPage from "../FeedbackPage/FeedbackPage"
import FooterPage from "../FooterPage/FooterPage"
import FundingPage from "../FundingPage/FundingPage"
import MediaPage from "../MediaPage/MediaPage"
import NewsSubscribePage from "../NewsSubscribePage/NewsSubscribePage"
import ServicesPage from "../ServicesPage/ServicesPage"
import SupportPage from "../SupportPage/SupportPage"
import VideoPage from "../VideoPage/VideoPage"
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
        <SupportPage />
        <BlogPage />
        <MediaPage />
        <ServicesPage />
        <FundingPage />
        <VideoPage />
        <FeedbackPage />
        <CountUpPage />
        <NewsSubscribePage />
        <FooterPage />
      </div>
    </>
  )
}

export default HomePage