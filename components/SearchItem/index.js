import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

function SearchItem({ location, handlePress, last }) {
  const { name, country, lat, lon, id, region } = location;

  return (
    <TouchableOpacity
      onPress={() =>
        handlePress({
          name,
          country,
          lat,
          lon,
          id,
        })
      }
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        paddingHorizontal: 16,
        marginBottom: 4,
        borderBottomWidth: last ? 0 : 1,
      }}
    >
      <MapPinIcon size={20} color="gray" />
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            marginLeft: 8,
          }}
        >
          {name}, {region}
        </Text>
        <Text
          style={{
            marginLeft: 8,
          }}
        >
          {country}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(SearchItem);
