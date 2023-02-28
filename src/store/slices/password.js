import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	password: "",
	filters: {
		length: 4,
		settings: {
			lowerCase: true,
			upperCase: true,
			symbols: true,
			numbers: true,
		}
	}
};

const passwordSlice = createSlice({
	name: "password",
	initialState,
	reducers: {
		setPassword(state, action) {
			state.password = action.payload;
		},
		changeLength(state, action) {
			state.filters.length = action.payload;
		},
		changeSettings(state, action) {
			state.filters.settings = action.payload;
		},
	},
});

export const {changeLength, changeSettings, setPassword} = passwordSlice.actions;

export default passwordSlice.reducer;