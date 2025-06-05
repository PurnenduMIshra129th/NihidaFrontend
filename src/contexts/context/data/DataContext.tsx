import { createContext, ReactNode,useCallback,useContext, useEffect, useState } from "react";

import useFetch from "../../../hooks/useFetch";
import { ISuccessResponse } from "../../../types/api/centralApi.types";

interface IDataContextType<T> {
  data: T | null;
  isLoading: boolean;
  fetchData: () => Promise<void>;
   error: Error | null;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const DataContext = createContext<IDataContextType<unknown> | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataProvider = <T,>({ endpoint, children }: { endpoint: string; children: ReactNode }) => {
  const { data, isLoading, fetchData: originalFetchData  } = useFetch<ISuccessResponse<T> | null>(endpoint);
  const [fetchedData, setFetchedData] = useState< T | null>(null);

  useEffect(() => {
    if (!isLoading && data?.statusCode === 1) {
      setFetchedData(data?.data);
    }
    else if (data?.statusCode !== 1 && data !== null) {
      setFetchedData(null);
    }
  }, [data ,isLoading]);

 const fetchData = useCallback(async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      originalFetchData(); 
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}, [originalFetchData]);


  return (
    <DataContext.Provider value={{ data: fetchedData, isLoading, fetchData ,error: null }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = <T,>() => {
 const context = useContext(DataContext); 
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context as IDataContextType<T>;
};