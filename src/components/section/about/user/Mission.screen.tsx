import MissionSectionCard from "../../../Cards/MissionSectionCard";
import Heading_1 from "../../../Text/Heading_1";
import Typography from "../../../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function MissionScreen() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-custom_white_3 py-16 px-4">
        <Heading_1
          text="Our Mission"
          className="text-custom_orange_1 text-4xl font-bold"
        />
        <Typography
          text="Our mission is to empower underserved communities by fostering inclusive development through education, health, environment, and economic support. We aim to drive sustainable change with collaborative action, policy advocacy, and capacity building that uplifts individuals and strengthens social equity at the grassroots level."
          className="mt-6 text-gray-700 w-full max-w-4xl  text-[16px] leading-relaxed text-center"
        />

        <div className="flex flex-col md:flex-row justify-center items-stretch mt-10 gap-6  w-full max-w-7xl cursor-pointer">
          <MissionSectionCard
            textHeading="Mission"
            textDescription="To build a strong Network platform for achieve various sustainable Developmental Goal(SDG) to adopt action oriented Burning Issues and mutual strengthening of the capacity of stake holders through sharing of experiences, views, ideas, policies analysis with collective action to influence the government policies, Schemes and programmes providing to needy communities and/or individuals for enhancing their socio-economic status through proper channel."
            routePath="about/mission"
          />
          <MissionSectionCard
            textHeading="Vision"
            textDescription="The NIHIDA Non- profit civil society organization, where the basic needs and Rights for Pro- poor, women, child, old aged, disabilities, youths, farmers, BPL families, SCs, STs, OBCs, Tribal, Minorities communities, small and marginalized people, animal welfare, human rights activities are ensured of integrated development and provide Training, Skill up gradation, IEC, Publicity, Awareness & technical support for enhance their livelihood opportunities. This program will be implementing through NIHIDA on Transparency.  NIHIDA also focusing Natural Resources Management , Water Conservation, Natural Farming, Organis Production, Community Management, Formation and Management og FPOs, SHGs, Federations, Cooperatives etc."
            routePath="about/vision"
          />
          <MissionSectionCard
            textHeading="Approach"
            textDescription="NIHIDA adopts a uniquely holistic approach to improving the quality of life improving by conservation of Natural Resources like Water, Soil & Environmental atmospheres working directly with communities, sharing traditional knowledge and enhance their skills with partner organizations, and conducting research containing Macro climate for sustainable livelihood. This adaptability to changing development contexts has sustained NIHIDA for more than three decades, within the Odisha. This success stems from strategic thinking and effective operations across three key domains: Sustainable Rural Livelihoods, Inclusive Education on Natural resources, and Building Disaster-Resilient Communities while addressing Climate Change Concerns."
            routePath="about/approch"
          />
        </div>
      </div>
    </>
  );
}

export default MissionScreen;
