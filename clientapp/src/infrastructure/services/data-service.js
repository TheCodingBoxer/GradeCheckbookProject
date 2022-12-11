import axios from "axios";
//const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "https://localhost:7200/";

const axiosConfig = {
  baseURL,
};

function protectedAxiosConfig(token) {
  return {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const dataService = {
  currentUser: (token) => {
    return axios.get("api/account/currentUser", {
      ...axiosConfig,
      ...protectedAxiosConfig(token),
    });
  },
  login: (data) => {
    return axios.post("api/account/login", data, axiosConfig);
  },
  getWeatherForcast: () => {
    return axios.get("WeatherForecast", axiosConfig);
  },
};

export default dataService;
