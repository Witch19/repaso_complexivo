import { http } from "./http";

export const getMovieCatalog = async () => {
  const res = await http.get("/movie-catalog/");
  return res.data;
};

export const getReservationEvents = async () => {
  const res = await http.get("/reservation-events/");
  return res.data;
};
