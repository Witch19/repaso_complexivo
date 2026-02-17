import { http } from "./http";

export const getReservations = async () => {
  const res = await http.get("/reservations/");
  return res.data;
};

export const createReservation = async (data: any) => {
  const res = await http.post("/reservations/", data);
  return res.data;
};
