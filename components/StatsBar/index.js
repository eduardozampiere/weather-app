import React from "react";
import { View } from "react-native";
import StatsItem from "../StatsItem";
import useLocation from "../../hooks/useLocation";

const stats = [
  {
    type: "wind",
  },
  {
    type: "drop",
  },
  {
    type: "sun",
  },
];
const StatsBar = () => {
  const {
    forecast: { current, forecast: _forecast },
  } = useLocation();

  const moreInfo = _forecast.forecastday[0]["astro"];

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
      }}
    >
      <StatsItem type="wind" value={current?.wind_kph} />
      <StatsItem type="drop" value={current?.humidity} />
      <StatsItem type="sun" value={moreInfo?.sunrise} />
    </View>
  );
};

export default StatsBar;
