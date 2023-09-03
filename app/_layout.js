import { Stack } from "expo-router";
import { LocationContextProvider } from "../context/location";
// import { Container } from './styles';

const Layout = () => {
  return (
    <LocationContextProvider>
      <Stack
      // screenOptions={{
      //   header: () => <View></View>,
      // }}
      />
    </LocationContextProvider>
  );
};

export default Layout;
