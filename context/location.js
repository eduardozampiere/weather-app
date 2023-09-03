import { createContext, useState } from "react";

export const LocationContext = createContext({});
export const LocationContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const context = {
    forecast,
    setForecast,
    loading,
    setLoading,
  };
  return (
    <LocationContext.Provider value={context}>
      {children}
    </LocationContext.Provider>
  );
};
