import { createSlice } from "@reduxjs/toolkit";

const parentSlice = createSlice({
    name: "parentsData",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchParentsRequest(state) {
            state.isLoading = true;
            state.error = null
        },
        fetchParentsSuccess(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchParentsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }

})

export const { fetchParentsRequest, fetchParentsSuccess, fetchParentsFailure } = parentSlice.actions;
export default parentSlice.reducer;