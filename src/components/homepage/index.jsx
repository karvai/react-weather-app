import React, { useContext } from 'react'
import { AppContext } from '../api/AppContext'
import LocationCategory from './LocationCategory'

const Homepage = () => {
	const { favouritesLocations, favouriteWeather, savedLocations, savedWeather } = useContext(AppContext)
	const [favouritesLocationsValue] = favouritesLocations
	const [favouriteWeatherValue, setWeatherValue] = favouriteWeather
	const [savedLocationsValue] = savedLocations
	const [weatherSaveValue, setWeatherSaveValue] = savedWeather

	return (
		<>
			{favouritesLocationsValue.length !== 0 && <LocationCategory catName='My Favourites' locations={favouritesLocationsValue} weatherValue={favouriteWeatherValue} setWeatherValue={setWeatherValue} />}
			{savedLocationsValue.length !== 0 && <LocationCategory catName='Saved Locations' locations={savedLocationsValue} weatherValue={weatherSaveValue} setWeatherValue={setWeatherSaveValue} />}
		</>
	)
}

export default Homepage
