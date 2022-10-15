import { RootState } from "store/store"
import { createSelector } from "@reduxjs/toolkit"


const selectUserInfo = (state: RootState) => state.user

export const getUsername = createSelector(
	[selectUserInfo],
	(userInfo) => {
		return userInfo.user?.username || ""
	}
)

export const getUserToken = createSelector(
	[selectUserInfo],
	(userInfo) => {
		return userInfo.user.token ?? ""
	}
)