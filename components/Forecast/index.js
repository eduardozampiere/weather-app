import React from "react";
import { Image, Text, View } from "react-native";
import StatsBar from "../StatsBar";
import NextDays from "../NextDays";
import useLocation from "../../hooks/useLocation";
import { weatherImages } from "../../helpers/icons";

const Forecast = () => {
  const { forecast } = useLocation();
  const { location, current } = forecast;
  return (
    <View
      style={{
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "space-around",
        flexGrow: 1,
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {location?.name},{" "}
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: 500,
            color: "#d1d5db",
          }}
        >
          {location?.country}
        </Text>
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={weatherImages[current?.condition?.text]}
          style={{
            width: 208,
            height: 208,
          }}
        />
      </View>

      <View
        style={{
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: 50,
            marginLeft: 20,
          }}
        >
          {current?.temp_c}&#176;
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
            marginLeft: 20,
            letterSpacing: 0.4,
            marginTop: 8,
          }}
        >
          {current?.condition?.text}
        </Text>
      </View>

      <StatsBar />

      <NextDays />
    </View>
  );
};

export default Forecast;
