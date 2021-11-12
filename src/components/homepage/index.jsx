import React, { useContext } from 'react'
import { AppContext } from '../api/AppContext'
import LocationCategory from './LocationCategory'
import styled from 'styled-components'

// styles
const Container = styled.div`
	margin: 0 6%;
`

const Homepage = () => {
	const { favouritesLocations, favouriteWeather, savedLocations, savedWeather } = useContext(AppContext)
	const [favouritesLocationsValue] = favouritesLocations
	const [favouriteWeatherValue, setWeatherValue] = favouriteWeather
	const [savedLocationsValue] = savedLocations
	const [weatherSaveValue, setWeatherSaveValue] = savedWeather

	return (
		<Container>
			{favouritesLocationsValue.length !== 0 && <LocationCategory catName='My Favourites' locations={favouritesLocationsValue} weatherValue={favouriteWeatherValue} setWeatherValue={setWeatherValue} />}
			{savedLocationsValue.length !== 0 && <LocationCategory catName='Saved Locations' locations={savedLocationsValue} weatherValue={weatherSaveValue} setWeatherValue={setWeatherSaveValue} />}
		</Container>
	)
}

export default Homepage
