import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { eventBus, EventPayload } from "../eventBus";

type AlertType = "success" | "danger" | "warning" | "info";

interface IAlertState {
  type: AlertType;
  message: string;
}

interface IAlertContextType {
  alert: IAlertState | null;
  showAlert: (type: AlertType, message: string) => void;
  hideAlert: () => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const AlertContext = createContext<IAlertContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<IAlertState | null>(null);

  const showAlert = (type: AlertType, message: string) => {
    setAlert({ type, message });
    setTimeout(() => hideAlert(), 3000);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    const listener = (event: EventPayload) => {
      if (['success', 'danger', 'warning', 'info'].includes(event.type)) {
        setAlert({ type: event.type as AlertType, message: event.message });
        setTimeout(() => setAlert(null), 3000);
      }
    };

    eventBus.subscribe(listener);
    return () => eventBus.unsubscribe(listener);
  }, []);
  return (
    <AlertContext value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within an AlertProvider");
  return context;
};