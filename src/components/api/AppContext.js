import { createContext, useState, useEffect } from 'react'
import { faSun, faMoon, faCloudSun, faCloud, faCloudMoon, faSmog, faBolt, faCloudShowersHeavy, faCloudMoonRain, faCloudSunRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [favouritesLocations, setFavouritesLocations] = useState(!!localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [])
	const [favouriteWeather, setFavouriteWeather] = useState([])
	const [savedLocations, setSavedLocations] = useState(!!localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : [])
	const [savedWeather, setSavedWeather] = useState([])
	const [isCelsius, setIsCelsius] = useState(!!localStorage.getItem('celsius') ? JSON.parse(localStorage.getItem('celsius')) : true)
	const [currentLocation, setCurrentLocation] = useState()

	const conditionWeatherIcon = (time, condition) => {
		const currentTime = new Date(time).getHours()

		if (['snow', 'Blizzard'].some((el) => condition.includes(el))) {
			return faSnowflake
		} else if (condition.includes('outbreaks')) {
			return faBolt
		} else if (['Mist', 'Fog', 'Freezing fog'].includes(condition)) {
			return faSmog
		} else if (['Cloudy', 'Overcast'].includes(condition)) {
			return faCloud
		} else if (condition.includes('Heavy rain')) {
			return faCloudShowersHeavy
		} else {
			// before 6am and after 8pm it uses moon icons, otherwise uses day icons and checks the weather conditions
			if (currentTime < 6 || currentTime > 19) {
				if (condition.includes('Partly cloudy')) {
					return faCloudMoon
				} else if (['rain', 'drizzle', 'sleet', 'pellets'].some((el) => condition.includes(el))) {
					return faCloudMoonRain
				} else {
					return faMoon
				}
			} else {
				if (condition.includes('Partly cloudy')) {
					return faCloudSun
				} else if (['rain', 'drizzle', 'sleet', 'pellets'].some((el) => condition.includes(el))) {
					return faCloudSunRain
				} else {
					return faSun
				}
			}
		}
	}

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(favouritesLocations))
		localStorage.setItem('saved', JSON.stringify(savedLocations))
		localStorage.setItem('celsius', JSON.stringify(isCelsius))
	}, [favouritesLocations, savedLocations, isCelsius])

	return <AppContext.Provider value={{ conditionWeatherIcon, favouriteWeather: [favouriteWeather, setFavouriteWeather], favouritesLocations: [favouritesLocations, setFavouritesLocations], savedWeather: [savedWeather, setSavedWeather], savedLocations: [savedLocations, setSavedLocations], isCelsius: [isCelsius, setIsCelsius], currentLocation: [currentLocation, setCurrentLocation] }}>{props.children}</AppContext.Provider>
}
