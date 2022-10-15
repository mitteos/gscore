import { createAsyncThunk } from "@reduxjs/toolkit"
import { $authQuery, $query } from "utils/api"
import { UserSignInState, UserState } from "./types"

interface UserLoginProps {
	email: string;
	password: string;
	setStep: (e: number) => void;
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
	async (userData) => {
		const {email, password, setStep} = userData
		const {data} = await $query.post("users/sign-in", {email, password})
		setStep(3)
		return data
	}
)
export const register = createAsyncThunk<UserRegisterProps, UserRegisterProps>(
	"user/userRegister",
	async (userData) => {
		const {email, password, username, setStep} = userData
		const {data} = await $query.post("users/sign-up", {email, username, password})
		setStep(2)
		return data
	}
)

export const changeInfo = createAsyncThunk<UserState, UserPersonalInfo>(
	"user/userChangeInfo",
	async (userData) => {
		const {email, username} = userData
		const {data} = await $authQuery.patch("users", {email, username})
		return data
	}
)

export const changePassword = createAsyncThunk<UserState, UserPassword>(
	"user/userChangePassword",
	async (userData) => {
		const {newPassword, currentPassword} = userData
		const {data} = await $authQuery.patch("users/update-password", {currentPassword, newPassword})
		return data
	}
)