import BannerScreen from "../../components/Background/Banner"
import Heading_2 from "../../components/Text/Heading_2"
import Typography from "../../components/Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function ApprochPage() {
  return (
    <>
      <>
      <div className="w-full">
        <BannerScreen
          textHeading="Approch"
          textDescription="NIHIDA works at the grassroots level with communities and builds the capacities of other like-minded organizations."
        />
        <div className="px-6 md:px-20 py-12 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto space-y-6">
            <Heading_2 text="Our Approch" className="text-custom_orange_1"/>
            <Typography
              text="NIHIDA adopts a uniquely holistic approach to improving the quality of life improving by conservation of Natural Resources like Water, Soil & Environmental atmospheres working directly with communities, sharing traditional knowledge and enhance their skills with partner organizations, and conducting research containing Macro climate for sustainable livelihood. This adaptability to changing development contexts has sustained NIHIDA for more than three decades, within the Odisha. This success stems from strategic thinking and effective operations across three key domains: Sustainable Rural Livelihoods, Inclusive Education on Natural resources, and Building Disaster-Resilient Communities while addressing Climate Change Concerns."
            />
            <Typography
              text="NIHIDA’s approach involves action, reflection, replication, and influencing. It engages with various factors at different levels, including stakeholder interests and relationships, relevant policies and legislation, socio-economic and socio-political conditions, and environmental factors like Plantation, climate change related activities, Water Conservation. NIHIDA works at the grassroots level with communities and builds the capacities of other like-minded organizations. It is known for complementing and supplementing various Ministries/ Departments/ International agencies/ state government efforts to enhance the impact of mainstream several development programs."
            />
            <Typography
              text="NIHIDA plays a crucial role in disaster risk reduction, leading preparedness, response, and recovery efforts since the 1992 and formation State level Network after super cyclone in the state. NIHIDA has strong community mobilization efforts Based on vibrant National/ State/ District/ Block/ Community Level  Network/ Forum  strengthen  on institutional capacity such as  NGO/ CBO/ NPO/VCO Network/ Forum , women’s SHGs and federations, producer groups and collectives, farmer groups and federations, and village development associations. "
            />
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default ApprochPage