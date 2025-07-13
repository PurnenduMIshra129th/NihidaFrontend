import BannerScreen from "../../components/Background/Banner"
import Heading_2 from "../../components/Text/Heading_2"
import Typography from "../../components/Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FuturePlanPage() {
  return (
     <>
      <div className="w-full">
        <BannerScreen
          textHeading="Future Plan"
          textDescription="Water Conservation, Rain Water Harvesting, Ground water Recharges, Environmental protection etc."
        />
        <div className="px-6 md:px-20 py-12 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto space-y-6">
            <Heading_2 text="NIHIDA STRATEGIC PLAN 2025-30 " />
            <Typography
              text="NIHIDA’s strategic plan for 2025-2027, to empower marginalized and vulnerable communities by building their capacities around livelihoods, food and nutritional security, disaster management, health, and education. The new strategy shifts focus from thematic areas to vulnerable groups, Rural distress communities, tribal people, urban poor, migrant workers, and disaster-vulnerable victims, nomadic communities. The objective is to help these communities realize their rights and entitlements through community engagement, capacity building, and advocacy. NIHIDA will mobilize people to access social protection schemes and services, while research and evidence will inform their government engagements for pro-poor services."
            />
            <Typography
              text="NIHIDA also  increased focus on Natural resource Management, Climate change related activities, Global Warming preparedness, Millets Promotion, Carcass Disposal, Disaster Management, Relief operations, Rescue, Rehabilitation, SWACHHATA HI SEWA Campaign,  Water Conservation, Rain Water Harvesting, Ground water Recharges, Environmental protection, Natural Farming, Organic Products promotion, Agricultural allied like Fisheries, Animal Welfare, Dairying , Goushala Establishment, Consumer Welfare & Protection, Science promotion, Traditional Culture, Model Village concept , improvement of Network, Training, Skill Development, IEC,Publicity, Awareness Generation campaign on Various burning issues.  NIHIDA will be reflected in all Priority areas of their work—planning, budgeting, and programing. Collaborating with national, state, and district partners, community stakeholders, and target group leaders."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FuturePlanPage