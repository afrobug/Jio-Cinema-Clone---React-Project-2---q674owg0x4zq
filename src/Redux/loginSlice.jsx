import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios"; 
 
export const getLogin = createAsyncThunk("login/getLogin", async (payload) => { 
  const res = await axios 
    .post( 
      "https://academics.newtonschool.co/api/v1/user/login", 
      { 
        email: payload.email, 
        password: payload.password, 
        appType: "ott", 
      }, 
 
      { 
        headers: { 
          projectId: "q674owg0x4zq", 
        }, 
      } 
    ) 
    .then((data) => data); 
 
  localStorage.setItem("token", res.data.token); 
  return res; 
}); 
 
export const getRegister = createAsyncThunk( 
  "login/getRegister", 
  async (payload) => { 
    const res = await axios 
      .post( 
        "https://academics.newtonschool.co/api/v1/user/signup", 
        { 
          name: payload.name, 
          email: payload.email, 
          password: payload.password, 
          appType: "ott", 
        }, 
 
        { 
          headers: { 
            projectId: "q674owg0x4zq", 
          }, 
        } 
      ) 
      .then((data) => data); 
 
    return res; 
  } 
); 
export const getUpdate = createAsyncThunk( 
  "login/getUpdate", 
  async (payload) => { 
    const token = localStorage.getItem("token"); 
    const res = await axios 
      .patch( 
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword", 
        { 
          name: payload.name, 
          email: payload.email, 
          passwordCurrent: payload.currPassword, 
          password: payload.password, 
          appType: "ott", 
        }, 
 
        { 
          headers: { 
            Authorization: `Bearer ${token}`, 
            projectId: "q674owg0x4zq", 
          }, 
        } 
      ) 
      .then((data) => data); 
 
    return res; 
  } 
); 
 
const initialState = { 
  isLogin: false, 
  loginError: "", 
  isRegister: false, 
  registerError: "", 
  name: "", 
  isUpdate: false, 
  updateError: "",
}; 
 
export const loginSlice = createSlice({ 
  name: "login", 
  initialState, 
  reducers: { 
    setUpdateFalse: (state) => { 
      state.isUpdate = false; 
    }, 

  }, 
 
  extraReducers: { 
    [getRegister.fulfilled]: (state) => { 
      state.isRegister = true; 
    }, 
    [getRegister.rejected]: (state) => { 
      state.registerError = "Invalid Register details"; 
    }, 
    [getLogin.fulfilled]: (state) => { 
      state.isLogin = true; 
    }, 
    [getLogin.rejected]: (state) => { 
      state.loginError = "Invalid Login Detailes, Try Again"; 
    }, 
    [getUpdate.fulfilled]: (state) => { 
      state.isUpdate = true; 
    },
    [getUpdate.rejected]: (state) => { 
        state.updateError = "Invalid update Detailes, Try Again"; 
      }, 
  }, 
}); 
 
export const { setUpdateFalse } = loginSlice.actions; 
export default loginSlice.reducer;