import { useNavigate } from "react-router";

import { IDashboardSectionCardProps } from "../../types/component/component.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
const DashboardSectionCard = (props: IDashboardSectionCardProps) => {
  const { title='no Title', route='/', description='no Description', icon=null } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="cursor-pointer bg-white border border-orange-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-2xl text-custom_orange_1">{icon}</div>}
        <h3 className="text-xl font-semibold text-custom_orange_1">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default DashboardSectionCard;