import { useContext } from "react";
import { LocationContext } from "../context/location";
export default function useLocation() {
  return useContext(LocationContext);
}
