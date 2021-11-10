import axios from 'axios'

const APIkey = '89a8fac2367c46b5b54145255210411'

const instance = axios.create({
	baseURL: 'http://api.weatherapi.com/v1/',
})

export const weatherAPI = {
	getCurrentWeather(location) {
		return instance.get(`current.json?key=${APIkey}&q=${location}&aqi=no`).then((response) => response.data)
	},
	getCurrentWeatherArr(arr) {
		return axios.all(arr.map((loc) => weatherAPI.getCurrentWeather(loc))).then(axios.spread((...allData) => allData))
	},
	getForecastThreeDays(location) {
		return instance.get(`forecast.json?key=${APIkey}&q=${location}&days=3&aqi=no&alerts=no`).then((response) => response.data)
	},
	getSearchLocationResults(location) {
		return instance.get(`search.json?key=${APIkey}&q=${location}`).then((response) => response.data)
	},
}
