import { useEffect } from "react";
import { useDispatch } from "react-redux";

import OfferingCard1 from "../../components/OfferingCard/OfferingCard1";
import OfferingCard2 from "../../components/OfferingCard/OfferingCard2";
import OfferingCard3 from "../../components/OfferingCard/OfferingCard3";
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"
import { fetchService } from "../../contexts/slice/serviceSlice";
import { AppDispatch } from "../../contexts/store";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ProductAndServiceScreen() {
  const dispatch = useDispatch<AppDispatch>();  

  useEffect(() => {
    dispatch(fetchService());
  },[dispatch]);

  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
        <SubHeading text="Our Offerings" />
        <Heading text="Products & Services" className="text-custom_maroon" />
        <div className="my-3 w-full flex flex-row flex-wrap">
          <OfferingCard1 />
          <OfferingCard2 />
          <OfferingCard3 />
        </div>
      </div>
    </>
  )

}

export default ProductAndServiceScreen