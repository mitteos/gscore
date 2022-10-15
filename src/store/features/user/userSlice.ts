import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "./types"
import { userAsyncActions } from "./"

interface InitialState {
	isLoading: boolean;
	error?: string;
	user: UserState
}

const initialState: InitialState = {
	isLoading: false,
	error: "",
	user: {} as UserState
}

const userSlice = createSlice(({
	name: "user",
	initialState,
	reducers: {
		userLogout(state) {
			state.user = {} as UserState
		}
	},
	extraReducers: (builder) => {
		builder.addCase(userAsyncActions.login.pending, (state) => {
			state.isLoading = true
			state.error = ""

		})
		builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = {
				...action.payload.user,
				token: action.payload.token
			}
		})
		builder.addCase(userAsyncActions.login.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})

		builder.addCase(userAsyncActions.register.pending, (state) => {
			state.isLoading = true
			state.error = ""
		})
		builder.addCase(userAsyncActions.register.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(userAsyncActions.register.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})

		builder.addCase(userAsyncActions.changeInfo.pending, (state) => {
			state.isLoading = true
			state.error = ""
		})
		builder.addCase(userAsyncActions.changeInfo.fulfilled, (state, action) => {
			state.user = {
				token: state.user.token,
				...action.payload
			}
			state.isLoading = false
		})
		builder.addCase(userAsyncActions.changeInfo.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})

		builder.addCase(userAsyncActions.changePassword.pending, (state) => {
			state.isLoading = true
			state.error = ""
		})
		builder.addCase(userAsyncActions.changePassword.fulfilled, (state, action) => {
			state.user = {
				token: state.user.token,
				...action.payload
			}
			state.isLoading = false
		})
		builder.addCase(userAsyncActions.changePassword.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})
	}
}))

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions