import { configureStore } from "@reduxjs/toolkit";

import passwordSlice from "./slices/password";

const store = configureStore({
	reducer: {
		password: passwordSlice,
	}
});

export default store;