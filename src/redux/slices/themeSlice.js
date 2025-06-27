import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

// Selector
export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;
