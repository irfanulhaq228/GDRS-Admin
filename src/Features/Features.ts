import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeaturesState {
    showSideBar: boolean;
    pageNavigate: string;
    darkMode: boolean
}

const initialState: FeaturesState = {
    showSideBar: false,
    pageNavigate: "dashboard",
    darkMode: false
}

export const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        updateSidebar: (state, action: PayloadAction<boolean>) => {
            state.showSideBar = action.payload;
        },
        updatePageNavigation: (state, action: PayloadAction<string>) => {
            state.pageNavigate = action.payload;
        },
        updateWebMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
    }
});

export const { updateSidebar, updatePageNavigation, updateWebMode } = featuresSlice.actions;
export const featuresReducer = featuresSlice.reducer;
export type RootState = ReturnType<typeof featuresReducer>;