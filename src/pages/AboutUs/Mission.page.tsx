import BannerScreen from "../../components/Background/Banner";
import Heading_2 from "../../components/Text/Heading_2";
import Typography from "../../components/Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function MissionPage() {
  return (
    <>
      <div className="w-full">
        <BannerScreen
          textHeading="Mission"
          textDescription="To adopt action oriented Burning Issues and mutual strengthening of the capacity "
        />
        <div className="px-6 md:px-20 py-12 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto space-y-6">
            <Heading_2 text="Our Mission" className="text-custom_orange_1"/>
            <Typography
              text=" To build a strong network platform to achieve various Sustainable
              Development Goals (SDGs) by addressing action-oriented burning
              issues. We focus on strengthening the capacities of stakeholders
              through the exchange of experiences, ideas, and policy analysis,
              while encouraging collective action to positively influence
              government schemes and programs that uplift underserved
              individuals and communities."
            />
            <Typography
              text=" Our goal is to improve the social and economic standards of living
              by promoting sustainable resource management across land, water,
              forest, and mining. Special emphasis is placed on
              disaster-affected slum areas and marginalized groups such as
              children, women, the elderly, persons with disabilities, farmers,
              tribal populations, SCs, STs, OBCs, minorities, and migrant
              laborers."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionPage;
