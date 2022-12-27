import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { value: { username: null } },
	reducers: {
		Login: (state, action) => {
			state.value = action.payload;
		},

		Logout: (state) => {
			state.value = null;
		},
	},
});

export const { Login, Logout } = userSlice.actions;

export default userSlice.reducer;
