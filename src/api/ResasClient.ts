import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESAS_ENDPOINT = "https://opendata.resas-portal.go.jp/";

const instance = axios.create({
  baseURL: RESAS_ENDPOINT,
  headers: { "X-API-KEY": API_KEY },
});

export const getPrefectures = () => {
  return instance.get('api/v1/prefectures');
};
