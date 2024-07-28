// this store for track authentication: user authenticate hai ya nai hai
import { createSlice } from "@reduxjs/toolkit";
        
  const initialState = {
        status: false,
        userData: null,
        };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:(state,action) =>{      // state se jo bhi value update karni hai wo initial state ke baad track me update ho jati  hai, action se milta hai payload
   state.status = true;
   state.userData =action.payload.userData;
    },
    logout:(state)=>{
        state.status =false;
        state.userData= null;
    }
  },
});
 export const {login,logout} = authSlice.actions
export default authSlice.reducer;
