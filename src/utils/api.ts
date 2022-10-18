import axios from "axios"

const API_URL = "https://gscore-back.herokuapp.com/api/"

export const $query = axios.create({
	baseURL: API_URL
})

$query.interceptors.request.use((config) => {
	const user = localStorage.getItem("persist:root")
	if(user) {
		const userInner = JSON.parse(user)
		const userToken: string = JSON.parse(userInner.user)?.user?.token
		config.headers!.Authorization = `Bearer ${userToken}`
	}
	return config
})