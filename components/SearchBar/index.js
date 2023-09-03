import React, { useCallback, useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { debounce } from "lodash";
import SearchItem from "../SearchItem";
import { searchLocations, getForecast } from "../../services/weather";
import useLocation from "../../hooks/useLocation";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const { setForecast, setLoading } = useLocation();

  async function handleLocation(location) {
    setShowSearch(false);
    setLoading(true);
    const response = await getForecast({
      long: location.lon,
      lat: location.lat,
    });
    setForecast(response);
    setLoading(false);
  }

  async function handleSearch(search) {
    const response = await searchLocations(search);
    setLocations(response);
  }

  const handleDebounce = useCallback(debounce(handleSearch, 500));

  useEffect(() => {
    handleLocation({
      lat: -22.9,
      lon: -43.23,
    });
  }, []);

  return (
    <View
      style={{
        height: "7%",
        marginHorizontal: 16,
        position: "relative",
        zIndex: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          borderRadius: 100,
          backgroundColor: showSearch
            ? "rgba(255 255 255 / 0.2)"
            : "transparent",
        }}
      >
        {showSearch ? (
          <TextInput
            onChangeText={handleDebounce}
            placeholder="Busque a cidade"
            placeholderTextColor="lightgray"
            style={{
              paddingLeft: 24,
              flexGrow: 1,
              height: 40,
              fontSize: 16,
              lineHeight: 24,
              color: "white",
            }}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => setShowSearch((prev) => !prev)}
          style={{
            backgroundColor: "rgba(255 255 255 / 0.3)",
            borderRadius: 999,
            padding: 12,
            margin: 4,
          }}
        >
          <MagnifyingGlassIcon size={24} color="white" />
        </TouchableOpacity>
      </View>
      {locations.length && showSearch ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "#d1d5db",
            top: 64,
            borderRadius: 24,
          }}
        >
          {locations.map((location, index) => (
            <SearchItem
              location={location}
              key={location.id}
              handlePress={handleLocation}
              last={index === locations.length - 1}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     flexGrow: 1,
//   },
//   image: {
//     position: "absolute",
//     height: "100%",
//     width: "100%",
//   },
// });

export default SearchBar;
