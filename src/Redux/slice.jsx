import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBusList = createAsyncThunk(
  "bus/getBusList",
  async (thunkAPI) => {
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
    ).then((data) => data.json());
    return res;
  }
);
export const getSearchList = createAsyncThunk(
  "bus/getSearchList",
  async ({ from, destination }) => {
    const res = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${destination}`
    ).then((data) => data.json());
    return res;
  }
);
const initialState = {
  busData: [],
};

export const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    sortByPrice: (state, action) => {
      state.busData = state.busData.sort(
        (a, b) => b.ticketPrice - a.ticketPrice
      );
    },
    sortByArrival: (state, action) => {
      state.busData = state.busData.sort(
        (a, b) => b.arrivalTime[0] - a.arrivalTime[0]
      );
    },
    sortByDeparture: (state, action) => {
      state.busData = state.busData.sort(
        (a, b) => b.departureTime[0] - a.departureTime[0]
      );
    },
  },
  extraReducers: {
    [getBusList.fulfilled]: (state, { payload }) => {
      state.busData = payload;
    },
    [getSearchList.fulfilled]: (state, { payload }) => {
      state.busData = payload;
    },
  },
});

export const { sortByPrice,sortByArrival,sortByDeparture } = busSlice.actions;

export default busSlice.reducer;
