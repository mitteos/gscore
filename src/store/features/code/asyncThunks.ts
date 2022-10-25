import { createAsyncThunk } from "@reduxjs/toolkit"
import { $query } from "utils/api"
import { AxiosError } from "axios"
import { CodeState } from "./types"

interface CodeInfo {
	code: string;
	origin: string;
}
interface ManageState {
	codesIds: number[];
	subscribeId: number;
}

export const activate = createAsyncThunk<CodeState, CodeInfo>(
	"code/activate",
	async (codeInfo, {rejectWithValue}) => {
		try {
			const {origin, code} = codeInfo
			const {data} = await $query.post(`code/activate?Origin=${origin}`, {code})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)
export const manage = createAsyncThunk<CodeState[], ManageState>(
	"code/manage",
	async (codeInfo, {rejectWithValue}) => {
		try {
			const {subscribeId, codesIds} = codeInfo
			const {data} = await $query.put("code/manage", {codesIds, subscribeId})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)