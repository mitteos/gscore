import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit"
import { subscriptionAsyncActions } from "."
import { ProductState, SubscriptionState } from "./types"

interface InitialState {
	allProducts: ProductState[] | null;
	selectedProductId: number | null;
	currentSubscriptions: SubscriptionState[]
	isLoading: boolean;
	error: string | unknown;
}

const initialState: InitialState = {
	allProducts: null,
	selectedProductId: null,
	currentSubscriptions: [],
	isLoading: false,
	error: ""
}

const subscriptionSlice = createSlice({
	name: "subscription",
	initialState,
	reducers: {
		setSelectedProduct(state, action: PayloadAction<number>) {
			state.selectedProductId = action.payload
		},
		setProducts(state, action: PayloadAction<ProductState[]>) {
			state.allProducts = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(subscriptionAsyncActions.buySubscription.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(subscriptionAsyncActions.changeProduct.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addMatcher(
			isAnyOf(
				subscriptionAsyncActions.buySubscription.pending,
				subscriptionAsyncActions.changeProduct.pending
			),
			(state) => {
				state.isLoading = true
				state.error = ""
			}
		)
		builder.addMatcher(
			isAnyOf(
				subscriptionAsyncActions.buySubscription.rejected,
				subscriptionAsyncActions.changeProduct.rejected
			),
			(state, action) => {
				state.isLoading = false
				state.error = action.payload
			}
		)
	}

})

export const subscriptionReducer = subscriptionSlice.reducer
export const subscriptionActions = subscriptionSlice.actions