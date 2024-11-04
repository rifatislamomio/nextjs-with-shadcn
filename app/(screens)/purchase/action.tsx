export const testsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getAllTests: builder.query({
      query: ({ testType, dateTo, dateFrom, pageNumber, pageSize }) => ({
        url: `/analytics/tests?testType=${testType}&dateFrom=${dateFrom}&dateTo=${dateTo}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetAllTestsQuery } = testsApi;