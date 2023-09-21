import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
 
export const getShow = createAsyncThunk( 
  "show/getShow", 
  async (thunkAPI) => { 
    const res = await fetch( 
      "https://academics.newtonschool.co/api/v1/ott/show?limit=100", 
      { 
        headers: { 
          projectId: "q674owg0x4zq", 
        }, 
      } 
    ).then((data) => data.json()); 
 
    return res; 
  } 
); 

const token = localStorage.getItem("token"); 

export const getWatchlist = createAsyncThunk( 
  "watchlist/getWatchlist", 
  async (thunkAPI) => { 
    const res = await fetch( 
      "https://academics.newtonschool.co/api/v1/ott/watchlist/like", 
      { 
        headers: { 
          Authorization: `Bearer ${token}`,
          projectId: "q674owg0x4zq", 
        }, 
      } 
    ).then((data) => data.json()); 
 
    return res; 
  } 
); 
 
 
const initialState = { 
  show: [], 
}; 
 
export const movieSlice = createSlice({ 
  name: "shows", 
  initialState, 
  reducers: { 
   
  }, 
  extraReducers: { 
    [getShow.fulfilled]: (state, { payload }) => { 
      state.show = payload.data; 
    }, 
    [getWatchlist.fulfilled]: (state, { payload }) => { 
      state.show = payload.data.shows; 
    }, 
   
  }, 
}); 
 
// export const {} = movieSlice.actions; 
 
export default movieSlice.reducer;