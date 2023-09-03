import React from "react";
import { Image, Text, View } from "react-native";
import { weatherIcons } from "../../helpers/icons";
// import { Container } from './styles';

const mapItens = {
  wind: "Kmh",
  drop: "%",
  sun: "",
};

const StatsItem = ({ type = "wind", value = "" }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 8,
        alignItems: "center",
      }}
    >
      <Image
        source={weatherIcons[type]}
        style={{
          width: 24,
          aspectRatio: 1,
          marginRight: 8,
        }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "600",
        }}
      >
        {value} {mapItens[type]}
      </Text>
    </View>
  );
};

export default StatsItem;
