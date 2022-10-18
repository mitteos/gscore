import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit"
import { UserState } from "./types"
import { userAsyncActions } from "./"

interface InitialState {
	isLoading: boolean;
	error?: string | unknown;
	user: UserState | null
	authStep: number;
}

const initialState: InitialState = {
	isLoading: false,
	error: "",
	user: null,
	authStep: 1
}

const userSlice = createSlice(({
	name: "user",
	initialState,
	reducers: {
		userLogout(state) {
			state.user = {} as UserState
			state.authStep = 1
		},
		setStep(state, action: PayloadAction<number>) {
			state.authStep = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = {
				token: action.payload.token,
				...action.payload.user
			}
			state.authStep = 3
		})
		builder.addCase(userAsyncActions.register.fulfilled, (state) => {
			state.isLoading = false
			state.authStep = 2
		})
		builder.addCase(userAsyncActions.changeInfo.fulfilled, (state, action) => {
			state.user = {
				token: state.user?.token,
				...action.payload
			}
			state.isLoading = false
		})
		builder.addCase(userAsyncActions.changePassword.fulfilled, (state, action) => {
			state.user = {
				token: state.user?.token,
				...action.payload
			}
			state.isLoading = false
		})
		builder.addMatcher(
			isAnyOf(
				userAsyncActions.register.pending,
				userAsyncActions.login.pending,
				userAsyncActions.changePassword.pending,
				userAsyncActions.changeInfo.pending
			),
			(state) => {
			state.isLoading = true
			state.error = ""
		})
		builder.addMatcher(
			isAnyOf(
				userAsyncActions.register.rejected,
				userAsyncActions.login.rejected,
				userAsyncActions.changePassword.rejected,
				userAsyncActions.changeInfo.rejected
			),
			(state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
}))

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions