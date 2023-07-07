import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
    userActive: false,
    userInfo: {}
})


const authSlice = createSlice({
    name:'user_auth',
    initialState:initialState(),
    reducers: {
        resetAuth: state => initialState(),
        isLogin:(state)=> {
          state.userActive = true
        },
        isNotLogin:(state)=>{
            state.userActive = false
        },
        userInformation:(state, action)=>{            
            state.userInfo = action.payload
        }
    }
})

export const {resetAuth, isLogin, isNotLogin, userInformation} = authSlice.actions

export default authSlice.reducer