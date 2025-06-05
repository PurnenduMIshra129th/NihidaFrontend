import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { eventBus } from "../eventBus";


interface ILoaderContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoaderContext = createContext<ILoaderContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    eventBus.subscribe((event) => {
      if (event.type === "loader_start") setIsLoading(true);
      if (event.type === "loader_stop") setIsLoading(false);
    });

    return () => eventBus.unsubscribe((event) => {
      if (event.type === "loader_start") setIsLoading(true);
      if (event.type === "loader_stop") setIsLoading(false);
    });
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader: () => setIsLoading(true), hideLoader: () => setIsLoading(false) }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within a LoaderProvider");
  return context;
};