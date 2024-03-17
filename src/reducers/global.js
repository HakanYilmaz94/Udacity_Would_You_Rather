import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    selectedTab: 0,
}

export const global = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        loading: (state, action) => {
            state.isLoading = action.payload
        },
        changeSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        },
        reset: () => initialState

    },
})

export const { loading, changeSelectedTab } = global.actions
export default global.reducer