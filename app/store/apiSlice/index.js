import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "..";
import { setAuth } from "../authSlice";
import { setAuthLoading } from "../uiSlice";
var isInitial = true;
var baseUrl = "";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (isInitial && token && id) {
        isInitial = false;
        store.dispatch(setAuthLoading(true));
        console.log(process.env);
        const res = await fetch(`${baseUrl}/api/v1/users`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data && data.data) {
          console.log("users info recieved : ", data);
          store.dispatch(setAuth({ ...data.data, access_token: token }));
        }
        store.dispatch(setAuthLoading(false));
      }
      // const storageToken = localStorage.getItem("token");
      if (getState().auth.token || token) {
        headers.set("authorization", `Bearer ${token || storageToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ firebaseIdToken }) => ({
        url: "/api/v1/auth/signin",
        method: "POST",
        body: { firebaseIdToken },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "api/v1/auth/signup",
        method: "POST",
        body: {...credentials },
      }),
    }),
    getRepairData: builder.query({ query: () => "api/v1/data/repair" }),
  }),
});

export const { useLoginMutation, useRegisterMutation,useGetRepairDataQuery } = api;

export default api;
