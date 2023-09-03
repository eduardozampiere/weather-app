import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import NextDaysItem from "../NextDaysItem";
import useLocation from "../../hooks/useLocation";

const NextDays = () => {
  const {
    forecast: { forecast: _forecast },
  } = useLocation();

  return (
    <View
      style={{
        marginBottom: 8,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CalendarDaysIcon
          size="22"
          color="white"
          style={{
            marginRight: 8,
          }}
        />
        <Text
          style={{
            color: "white",
            lineHeight: 24,
            fontSize: 17,
          }}
        >
          Previsão diária
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 15,
        }}
      >
        {_forecast.forecastday.map((item) => (
          <NextDaysItem
            key={item?.date}
            day={item?.date}
            forecast={item?.day?.condition?.text}
            degree={item?.day?.avgtemp_c}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NextDays;
