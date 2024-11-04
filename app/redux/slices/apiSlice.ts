import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return fetchBaseQuery({
    baseUrl: apiBaseUrl,
    credentials: "same-origin",
    prepareHeaders: async (headers) => {
      // const { auth0 } = (getState() as IRootState).auth; //TODO: auth implementation
      // if (auth0.accessToken) {
      //   headers.set("Authorization", `Bearer ${auth0.accessToken}`);
      // }
        headers.set("Content-Type", "application/json");
      return headers;
    },
  })(args, api, extraOptions);
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
  },
  endpoints: () => ({}),
});
