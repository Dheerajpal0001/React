import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    content:'',
    slug:'',
    featuredImage: '',
    status: true,
}

export const postSlice = createSlice({
    name: post,
    initialState,
    reducers: {
        createPost: (state,action)=>{},
        updatePost: (state,action)=>{},
        deletePost: (state,action)=>{},
        getPost: (state,action)=>{},
    }
})

export const {} = postSlice.actions
export default postSlice.reducer
