import axios from "axios"
import { store } from "store/store"

const API_URL = "https://gscore-back.herokuapp.com/api/"

export const $query = axios.create({
	baseURL: API_URL
})

$query.interceptors.request.use((config) => {
	const {user} = store.getState()
	config.headers!.Authorization = `Bearer ${user.user?.token ?? ""}`
	return config
})