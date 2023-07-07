import { createAsyncThunk } from '@reduxjs/toolkit'
import { isLogin, isNotLogin, resetAuth, userInformation } from '../store/schemas/authSlice'


const server = import.meta.env.VITE_DOMAIN
export const getUser = createAsyncThunk(
    'auth/getUser',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`${server}?auth=true&model=user&path=/getUser`, {
                method:'GET',
                credentials: 'include',
            })
            const results = await response.json()
            if("error" in results){
                throw results
            }
            thunkApi.dispatch(userInformation(results.message))
            thunkApi.dispatch(isLogin())
        } catch (error) {
            console.log(error)
        }
    }
  )

    


  export const logout = createAsyncThunk(
    'auth/logout',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`${server}?auth=true&model=user&path=/logout`, {
                method:'GET',
                credentials: 'include',  
            })
            const results = await response.json()
            if("error" in results){
                throw results
            }
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  )
