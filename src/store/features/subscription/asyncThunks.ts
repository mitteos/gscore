import { createAsyncThunk } from "@reduxjs/toolkit"
import { $query } from "utils/api"
import { SubscriptionState } from "./types"
import { AxiosError } from "axios"

interface ChangeProductProps {
	productId: number;
	subscribeId: number;
}

export const buySubscription = createAsyncThunk<SubscriptionState[], number | undefined>(
	"subscription/buySubscription",
	async (priceId,{rejectWithValue}) => {
		try {
			const {data} = await $query.post("payments/buy", {priceId})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)

export const changeProduct = createAsyncThunk<SubscriptionState[], ChangeProductProps>(
	"subscription/changeProduct",
	async (changeProps ,{rejectWithValue}) => {
		try {
			const {productId, subscribeId} = changeProps
			const {data} = await $query.post("subscribe/change-product", {productId, subscribeId})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)