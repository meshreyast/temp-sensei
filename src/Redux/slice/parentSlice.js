import { createSlice } from "@reduxjs/toolkit";

const parentSlice = createSlice({
    name: "parentsData",
    initialState: {
        data: null,
        error: null,
    },
    reducers: {
        fetchParentsRequest(state) {
            state.error = null;
        },
        fetchParentsSuccess(state, action) {
            state.data = action.payload;
        },
        fetchParentsFailure(state, action) {
            state.error = action.payload;
        }
    }

})

export const { fetchParentsRequest, fetchParentsSuccess, fetchParentsFailure } = parentSlice.actions;
export default parentSlice.reducer;