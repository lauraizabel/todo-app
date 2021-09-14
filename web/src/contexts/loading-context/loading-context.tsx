import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";

export const LoadingContext = React.createContext({
  isLoading: false,
  setLoading: (loading: boolean) => {},
});

export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (loading: boolean) => setIsLoading(loading);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <LoadingOverlay active={isLoading} spinner>
        {children}
      </LoadingOverlay>
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const { isLoading, setLoading } = React.useContext(LoadingContext);

  return { isLoading, setLoading };
};
