import DonorCardIcon from "../Icons/DonorCardIcon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function DonorCard() {
  return (
    <>
      <div className="bg-custom_white rounded-lg absolute top-1/2 transform -translate-y-1/2 right-[12%] p-10">
        <div>
          <Typography className="mb-5 uppercase text-custom_maroon font-bold text-[20px] leading-[2] tracking-[4px]" text="For Donors" />
          <ul className="list-disc ml-10 text-custom_black">
            <DonorCardIcon text="Start your Strategic Philanthropy journey" />
            <DonorCardIcon text="Outsource your CSR" />
            <DonorCardIcon text="Celebrate special occassions in a unique way" />
            <DonorCardIcon text="Opt for a Systematic Giving Plan" />
            <DonorCardIcon text="Make a one-time donation = Support NGOs for 10 years" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default DonorCard