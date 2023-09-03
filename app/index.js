import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import SearchBar from "../components/SearchBar";
import Forecast from "../components/Forecast";
import useLocation from "../hooks/useLocation";

const App = () => {
  const { forecast, loading } = useLocation();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => null }} />
      <StatusBar style="light " />
      <Image
        blurRadius={50}
        source={require("../assets/bg.png")}
        style={styles.image}
      />
      <SafeAreaView
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <SearchBar />
        {loading && <ActivityIndicator />}
        {forecast && !loading ? <Forecast /> : null}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexGrow: 1,
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

export default App;
