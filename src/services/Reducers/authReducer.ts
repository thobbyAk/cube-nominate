import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Authentication {
    token: string
}

const initialState: Authentication = {
    token: ""
}
export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        handleSetAuthToken: (state, action: PayloadAction<any>) => {

            state.token = action.payload
        }
    },
    extraReducers(builder) {

    }
})

export const { handleSetAuthToken } = authenticationSlice.actions;