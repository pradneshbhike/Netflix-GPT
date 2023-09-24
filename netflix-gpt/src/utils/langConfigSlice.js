import { createSlice } from "@reduxjs/toolkit";

const langConfig = createSlice({
    name: "langConfig",
    initialState: { lang: "English"},
    reducers: {
        selectedLang : (state,action) => {
        state.lang = action.payload;
    }
}
})


export const {selectedLang} = langConfig.actions;

export default langConfig.reducer;

