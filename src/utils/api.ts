import axios from "axios";

const API_URL = "https://gscore-back.herokuapp.com/api/"
const TEST_USER_TOKEN = 'test'

const $query = axios.create({
	baseURL: API_URL
})
const $authQuery = axios.create({
	baseURL: API_URL
})

$authQuery.interceptors.request.use((config) => {
	config.headers!.Authorization = `Bearer ${TEST_USER_TOKEN}`
	return config
})

export {$query, $authQuery}