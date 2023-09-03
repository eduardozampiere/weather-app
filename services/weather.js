import axios from "axios";

const apiKey = "a542b2bc631046cea5700720230309";

const api = axios.create({
  baseURL: "http://api.weatherapi.com",
});

export const getForecast = async ({ lat, long }) => {
  try {
    const location = `${lat},${long}`;
    const response = await api.get("v1/forecast.json", {
      params: {
        key: apiKey,
        q: location,
        days: 5,
      },
    });

    return response.data;
  } catch (err) {
    return {};
  }
};

export const searchLocations = async (search) => {
  try {
    const response = await api.get("v1/search.json", {
      params: {
        key: apiKey,
        q: search,
      },
    });

    return response.data;
  } catch (err) {
    return [];
  }
};
