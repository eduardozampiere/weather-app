import React from "react";
import { View, Text, Image } from "react-native";
import { weatherImages } from "../../helpers/icons";

const NextDaysItem = ({ day, forecast, degree }) => {
  const date = new Date(day + "T22:00");
  const options = {
    weekday: "long",
  };
  const dayName = date.toLocaleDateString("pt-BR", options);
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 110,
        borderRadius: 24,
        paddingVertical: 12,
        marginRight: 16,
        backgroundColor: "rgba(255 255 255 / 0.15)",
      }}
    >
      <Image
        style={{
          width: 44,
          height: 44,
        }}
        source={weatherImages[forecast]}
      />
      <Text
        style={{
          color: "white",
        }}
      >
        {dayName?.split(",")[0]}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {degree}&#176;
      </Text>
    </View>
  );
};

export default NextDaysItem;
