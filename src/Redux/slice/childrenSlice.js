import { createSlice } from "@reduxjs/toolkit";

const childrenSlice = createSlice({
    name: "childrenData",
    initialState: {
        data: [],
        error: null,
    },
    reducers: {
        fetchChildrenRequest(state) {
            state.error = null;
        },
        fetchChildrenSuccess(state, action) {
            state.data = action.payload;
        },
        fetchChildrenFailure(state, action) {
            state.error = action.payload;
        },
    }
})

export const { fetchChildrenRequest, fetchChildrenSuccess, fetchChildrenFailure } = childrenSlice.actions;
export default childrenSlice.reducer;