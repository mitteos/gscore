import axios from "axios"

const API_URL = "https://gscore-back.herokuapp.com/api/"

const $query = axios.create({
	baseURL: API_URL
})
const $authQuery = axios.create({
	baseURL: API_URL,

})

export const setUserToken = (token: string) => $authQuery.interceptors.request.use((config) => {
	config.headers!.Authorization = `Bearer ${token}`
	return config
})

export {$query, $authQuery}