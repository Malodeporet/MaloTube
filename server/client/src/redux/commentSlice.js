import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComment: null,
    loading: false,
    error: false,
};

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        fetchCommentStart: (state) => {
            state.loading = true;
        },
        fetchCommentSuccess: (state, action) => {
            state.loading = false;
            state.currentComment = action.payload;
        },
        fetchCommentFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        deleteCommentSuccess: (state) => {
            state.loading = false;
            state.currentComment = null;
        },
    },
});

export const { fetchCommentStart, fetchCommentSuccess, fetchCommentFailure, deleteCommentSuccess } =
    commentSlice.actions;

export default commentSlice.reducer;