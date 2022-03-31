import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name:"user",
    initialState:{
        isLogedIn:false,
        userData:null,
        searchInput:'tech',
        blogData:null
    },
    reducers:{
        logedInHandler:(state,action)=>{
            state.isLogedIn = action.payload
        },
        userDataHandler:(state,action)=>{
            state.userData = action.payload
        },
        searchInputHandler:(state,action)=>{
            state.searchInput = action.payload
        },
        blogDataHandler:(state,action)=>{
            state.blogData = action.payload
        }
    }
});

export const {
    logedInHandler,
    userDataHandler,
    searchInputHandler,
    blogDataHandler
} = userSlice.actions;

export const selectSignedIn = (state)=> state.user.isLogedIn;
export const selectUserData = (state)=> state.user.userData;
export const selectSearchInput = (state)=> state.user.searchInput
export const selectBlogData = (state)=> state.user.blogData;

export default userSlice.reducer