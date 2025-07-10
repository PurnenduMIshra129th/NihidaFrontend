import BannerScreen from "../../components/Background/Banner";
import Heading_2 from "../../components/Text/Heading_2";
import Typography from "../../components/Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function VisionPage() {
  return (
    <>
      <div className="w-full">
        <BannerScreen
          textHeading="Vision"
          textDescription="Program will be implementing through NIHIDA on Transparency. "
        />
        <div className="px-6 md:px-20 py-12 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto space-y-6">
            <Heading_2 text="Our Vision" className="text-custom_orange_1"/>

            <Typography text="The NIHIDA Non- profit civil society organization, where the basic needs and Rights for Pro- poor, women, child, old aged, disabilities, youths, farmers, BPL families, SCs, STs, OBCs, Tribal, Minorities communities, small and marginalized people, animal welfare, human rights activities are ensured of integrated development and provide Training, Skill up gradation, IEC, Publicity, Awareness & technical support for enhance their livelihood opportunities." />

            <Typography text="This program will be implementing through NIHIDA on Transparency.  NIHIDA also focusing Natural Resources Management , Water Conservation, Natural Farming, Organis Production, Community Management, Formation and Management og FPOs, SHGs, Federations, Cooperatives etc." />

            <Heading_2 text="Aims & Objectives"  className="text-custom_orange_1"/>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Support inaccessible and disaster-prone geographical areas
                (hilly, forest, cyclone, flood, drought, desert, snow-affected,
                etc.).
              </li>
              <li>
                Promote welfare of SCs, STs, OBCs, minorities, and tribal
                populations.
              </li>
              <li>
                Empower forest and nomadic tribes, seasonal migrants, and
                migrant laborers.
              </li>
              <li>
                Assist displaced, cultural migrant, and refugee communities.
              </li>
              <li>
                Support the differently-abled: blind, deaf, mute, physically and
                mentally challenged individuals.
              </li>
              <li>
                Uplift old-aged, widows, divorced/deserted women, and orphans
                through inclusive care.
              </li>
              <li>
                Improve livelihoods of women and child laborers, farmers, rural
                and urban poor, and farm women.
              </li>
              <li>
                Address challenges of slum dwellers and street children in both
                urban and rural areas.
              </li>
              <li>
                Facilitate youth development: students, unemployed youth, PRIs,
                researchers, volunteers, and motivators.
              </li>
              <li>
                Support children in remand homes and underprivileged girls in
                rural, urban, and tribal areas.
              </li>
              <li>
                Implement integrated animal welfare programs for community
                benefit.
              </li>
              <li>
                Organize and promote human rights awareness and legal literacy
                initiatives.
              </li>
              <li>
                Provide free legal aid for women, the poor, differently-abled,
                SCs, STs, minorities, and disaster-affected individuals.
              </li>
              <li>
                Promote physical and mental wellness through community health
                programs and YOGA education.
              </li>
              <li>
                Lead consumer rights education, welfare campaigns, and awareness
                programs.
              </li>
              <li>
                Establish vocational training centers and skill-building hubs in
                rural areas.
              </li>
              <li>
                Empower youth through training, study tours, leadership
                workshops, and cultural exposure.
              </li>
              <li>
                Encourage formation and management of SHGs, farmer clubs,
                cooperatives, and federations.
              </li>
              <li>
                Promote legal education by publishing and distributing
                law-related literature in Odia and Hindi.
              </li>
              <li>
                Combat poverty through coordinated efforts, capacity-building
                workshops, training, debates, street plays, wall writing, and
                village-based campaigns.
              </li>
              <li>
                Promote communal harmony and foster national integration through
                inclusive outreach programs.
              </li>
              <li>
                Advance agriculture, horticulture, and food processing practices
                in Odisha’s rural belt.
              </li>
              <li>
                Support rural producers with market access and promote
                handicraft industries.
              </li>
              <li>
                Preserve and promote sustainable use of natural resources —
                land, water, air, forest, and biodiversity.
              </li>
              <li>
                Host book fairs, exhibitions, and stalls to celebrate Indian
                languages and local knowledge streams.
              </li>
              <li>
                Encourage scientific temper and technological innovation for
                rural self-employment and development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionPage;
