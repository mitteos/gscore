import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { codeAsyncActions } from "."
import { CodeState } from "./types"

interface InitialState {
	isLoading: boolean;
	error: string | unknown;
	codes: CodeState[]
}

const initialState: InitialState = {
	isLoading: false,
	error: "",
	codes: []
}

const codeSlice = createSlice({
	name: "code",
	initialState,
	reducers: {
		setCodes(state, action) {
			state.codes = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(codeAsyncActions.activate.fulfilled, (state, action) => {
			state.codes = state.codes.map(code => {
				if(code.id === action.payload.id) {
					return action.payload
				}
				return code
			})
			state.isLoading = false
		})
		builder.addCase(codeAsyncActions.manage.fulfilled, (state, action) => {
			state.codes = action.payload
			state.isLoading = false
		})
		builder.addMatcher(isAnyOf(
			codeAsyncActions.activate.pending,
			codeAsyncActions.manage.pending
		), (state) => {
			state.isLoading = true
			state.error = ""
		})
		builder.addMatcher(isAnyOf(
			codeAsyncActions.activate.rejected,
			codeAsyncActions.manage.rejected
		), (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	}
})

export const codeReducer = codeSlice.reducer
export const codeActions = codeSlice.actions