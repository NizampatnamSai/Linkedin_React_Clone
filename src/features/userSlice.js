import { createSlice } from '@reduxjs/toolkit';


export const userSlice=createSlice({
  name:'user',
  initialState:{
    user:null,
  },

  reducers:{
    login:(state,action)=>{
      state.user=action.payload;

    },
    logout:(state,acton)=>{
      state.user=null;
    }
  }
})





export const {login,logout}=userSlice.actions;


//Selectors to pull information to the componenet
export const selectUser=(state)=>state.users.user;

export default userSlice.reducer