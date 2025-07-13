import { useAlert } from "../../contexts/context/alert/AlertContext";
import {
  CrossIcon,
  DangerTriangleOutline,
  Info,
  Neutral,
  Success,
  Warning,
} from "../Icons/Icon";

const alertStyles = {
  info: {
    bg: "bg-blue-50 dark:bg-gray-800",
    text: "text-blue-800 dark:text-blue-400",
    buttonBg:
      "bg-blue-50 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700",
    buttonText: "text-blue-500 dark:text-blue-400",
    icon: <Info />,
  },
  danger: {
    bg: "bg-red-50 dark:bg-gray-800",
    text: "text-red-800 dark:text-red-400",
    buttonBg:
      "bg-red-50 hover:bg-red-200 dark:bg-gray-800 dark:hover:bg-gray-700",
    buttonText: "text-red-500 dark:text-red-400",
    icon: <DangerTriangleOutline />,
  },
  success: {
    bg: "bg-green-50 dark:bg-gray-800",
    text: "text-green-800 dark:text-green-400",
    buttonBg:
      "bg-green-50 hover:bg-green-200 dark:bg-gray-800 dark:hover:bg-gray-700",
    buttonText: "text-green-500 dark:text-green-400",
    icon: <Success />,
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-gray-800",
    text: "text-yellow-800 dark:text-yellow-300",
    buttonBg:
      "bg-yellow-50 hover:bg-yellow-200 dark:bg-gray-800 dark:hover:bg-gray-700",
    buttonText: "text-yellow-500 dark:text-yellow-300",
    icon: <Warning />,
  },
  neutral: {
    bg: "bg-gray-50 dark:bg-gray-800",
    text: "text-gray-800 dark:text-gray-300",
    buttonBg:
      "bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
    buttonText: "text-gray-500 dark:text-gray-300 dark:hover:text-white",
    icon: <Neutral />,
  },
};
// eslint-disable-next-line @typescript-eslint/naming-convention
function Alerts() {
  const { alert, hideAlert } = useAlert(); // use hideAlert directly

  if (!alert) return null;

  const styles = alertStyles[alert.type];

  return (
    <div
      className={`fixed top-[8rem] right-4 sm:right-[1rem] z-50 w-[90%] sm:w-[25rem] flex items-start gap-3 p-4 mb-4 rounded-lg
    ${styles.bg} ${styles.text}
    transform transition-transform duration-1000 ease-out
    ${alert ? "translate-x-0" : "translate-x-full"}
    shadow-lg`}
      role="alert"
    >
      {/* Icon (dynamic from alertStyles) */}
      <div className="shrink-0 mt-1">{styles.icon}</div>

      {/* Message */}
      <div className="flex-1 text-sm font-medium break-words">
        {alert.message}
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={hideAlert}
        className={`p-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 ${styles.buttonBg} ${styles.buttonText}`}
        aria-label="Close"
      >
       <CrossIcon className="w-3 h-3"/>
      </button>
    </div>
  );
}
export default Alerts;
