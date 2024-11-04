import { apiBaseUrl } from "@/app/config/config";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return fetchBaseQuery({
    baseUrl: apiBaseUrl,
    credentials: "same-origin",
    prepareHeaders: async (headers, { getState }) => {
      const { auth0 } = (getState() as RootState).auth;
      if (auth0.accessToken) {
        headers.set("Authorization", `Bearer ${auth0.accessToken}`);
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  })(args, api, extraOptions);
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    return result;
  },
  endpoints: () => ({}),
});
