import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { value: { username: null } },
	reducers: {
		LoginUser: (state, action) => {
			state.value = action.payload;
		},

		LogoutUser: (state) => {
			state.value = null;
		},
	},
});

export const { LoginUser, LogoutUser } = userSlice.actions;

export default userSlice.reducer;
