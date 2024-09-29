import { axiosClient } from "./axios";

export const getVendors = async () => {
  return axiosClient.get("/vendor/list").then((response) => {
    return response?.data?.data;
  });
};

export const createVendor = async (data: {
  name: string;
  url: string;
  description: string | undefined;
}) => {
  return axiosClient
    .post("/vendor", data)
    .then((response) => response?.data?.data);
};
