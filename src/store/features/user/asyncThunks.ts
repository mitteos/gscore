import { createAsyncThunk } from "@reduxjs/toolkit"
import { $query } from "utils/api"
import { UserSignInState, UserState } from "./types"
import { AxiosError } from "axios"

interface UserLoginProps {
	email: string;
	password: string;
}
interface UserRegisterProps extends UserLoginProps{
	username: string;
}
interface UserPersonalInfo {
	email: string;
	username: string;
}
interface UserPassword {
	currentPassword: string;
	newPassword: string;
}

export const login = createAsyncThunk<UserSignInState, UserLoginProps>(
	"user/userLogin",
	async (userData, {rejectWithValue}) => {
		try {
			const {email, password} = userData
			const {data} = await $query.post("users/sign-in", {email, password})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)

export const register = createAsyncThunk<UserRegisterProps, UserRegisterProps>(
	"user/userRegister",
	async (userData, {rejectWithValue}) => {
		try {
			const {email, password, username} = userData
			const {data} = await $query.post("users/sign-up", {email, username, password})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)

export const changeInfo = createAsyncThunk<UserState, UserPersonalInfo>(
	"user/userChangeInfo",
	async (userData, {rejectWithValue}) => {
		try {
			const {email, username} = userData
			const {data} = await $query.patch("users", {email, username})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)

export const changePassword = createAsyncThunk<UserState, UserPassword>(
	"user/userChangePassword",
	async (userData, {rejectWithValue}) => {
		try {
			const {newPassword, currentPassword} = userData
			const {data} = await $query.patch("users/update-password", {currentPassword, newPassword})
			return data
		} catch (e) {
			if(e instanceof AxiosError) {
				return rejectWithValue(e.response?.data.message)
			}
			return rejectWithValue("Unknown error")
		}
	}
)