import { useAlert } from "../../contexts/context/alert/AlertContext";
import { alertStyles } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Alerts() {

    const { alert } = useAlert();

    if (!alert) return null;

    const styles = alertStyles[alert.type];

    return (
        <>
            <div className={`flex items-center p-4 mb-4 rounded-lg ${styles.bg} ${styles.text} z-50 w-[25rem] fixed top-[8rem] right-[1rem] transition ease-in-out delay-100`} role="alert">
                {/* Icon */}
                <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
                </svg>
                <span className="sr-only">Info</span>

                {/* Message */}
                <div className="ms-3 text-sm font-medium">{alert.message}</div>

                {/* Close Button */}
                <button
                    type="button"
                    className={`ms-auto p-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 ${styles.buttonBg} ${styles.buttonText}`}
                    aria-label="Close"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Alerts