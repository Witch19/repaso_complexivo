import { http } from "./http";

export const getShows = async () => {
  const res = await http.get("/shows/");
  return res.data;
};
