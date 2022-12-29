import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { isLoggedIn: false, username: null },
	reducers: {
		LoginUser: (state, action) => {
			state.username = action.payload;
			state.isLoggedIn = true;
		},

		LogoutUser: (state) => {
			state.username = null;
			state.isLoggedIn = false;
		},
	},
});

export const { LoginUser, LogoutUser } = userSlice.actions;

export default userSlice.reducer;
