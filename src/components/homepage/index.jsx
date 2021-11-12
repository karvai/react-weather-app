import React, { useContext } from 'react'
import { AppContext } from '../api/AppContext'
import LocationCategory from './LocationCategory'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// styles
const Container = styled.div`
	margin: 0 6%;
	margin-bottom: 100px;
`
const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5%;
	height: 100vh;
	text-align: center;
`

const Homepage = () => {
	const { favouritesLocations, favouriteWeather, savedLocations, savedWeather } = useContext(AppContext)
	const [favouritesLocationsValue] = favouritesLocations
	const [favouriteWeatherValue, setWeatherValue] = favouriteWeather
	const [savedLocationsValue] = savedLocations
	const [weatherSaveValue, setWeatherSaveValue] = savedWeather

	if (favouritesLocationsValue.length === 0 && savedLocationsValue.length === 0) {
		return (
			<Center>
				<span>
					Tap on <FontAwesomeIcon icon={faSearch} color='#4c43fb' /> to add new locations to the homepage.
				</span>
			</Center>
		)
	} else {
		return (
			<Container>
				{favouritesLocationsValue.length !== 0 && <LocationCategory catName='My Favourites' locations={favouritesLocationsValue} weatherValue={favouriteWeatherValue} setWeatherValue={setWeatherValue} />}
				{savedLocationsValue.length !== 0 && <LocationCategory catName='Saved Locations' locations={savedLocationsValue} weatherValue={weatherSaveValue} setWeatherValue={setWeatherSaveValue} />}
			</Container>
		)
	}
}

export default Homepage
