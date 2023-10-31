import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NominationPayload, Nominations, Nominees } from "../../Utils/types";


interface NominationState {
    nominees: Array<Nominees>,
    nominations: Array<Nominations>,
    currentNomination: NominationPayload,
}

const initialState: NominationState = {
    nominees: [],
    nominations: [],
    currentNomination: {
        nominee_id: '',
        reason: '',
        process: ''
    }
}

export const nominationSlice = createSlice({
    name: "nomination",
    initialState,
    reducers: {
        handleSetNominees: (state, action: PayloadAction<any>) => {
            state.nominees = action.payload
        },
        handleSubmitNomination: (state, action) => {
            state.currentNomination = action.payload
        },
        handleSetNominations: (state, action: PayloadAction<any>) => {
            state.nominations = action.payload
        },

    },
    extraReducers(builder) {

    },
});

export const { handleSetNominees, handleSubmitNomination, handleSetNominations } = nominationSlice.actions;
