import { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [favouritesLocations, setFavouritesLocations] = useState(!!localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [])
	const [favouriteWeather, setFavouriteWeather] = useState([])
	const [savedLocations, setSavedLocations] = useState(!!localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : [])
	const [savedWeather, setSavedWeather] = useState([])
	const [isCelsius, setIsCelsius] = useState(!!localStorage.getItem('celsius') ? JSON.parse(localStorage.getItem('celsius')) : true)
	const [detailedWeather, setDetailedWeather] = useState([])
	const [currentLocation, setCurrentLocation] = useState()

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(favouritesLocations))
		localStorage.setItem('saved', JSON.stringify(savedLocations))
		localStorage.setItem('celsius', JSON.stringify(isCelsius))
	}, [favouritesLocations, savedLocations, isCelsius])

	return <AppContext.Provider value={{ favouriteWeather: [favouriteWeather, setFavouriteWeather], favouritesLocations: [favouritesLocations, setFavouritesLocations], savedWeather: [savedWeather, setSavedWeather], savedLocations: [savedLocations, setSavedLocations], isCelsius: [isCelsius, setIsCelsius], detailedWeather: [detailedWeather, setDetailedWeather], currentLocation: [currentLocation, setCurrentLocation] }}>{props.children}</AppContext.Provider>
}
