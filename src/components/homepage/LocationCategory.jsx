import React, { useEffect, useContext } from 'react'
import { weatherAPI } from '../api/FetchData'
import Card from './Card'
import { AppContext } from '../api/AppContext'

const LocationCategory = ({ catName, locations, weatherValue, setWeatherValue }) => {
	const { isCelsius } = useContext(AppContext)
	const [cel] = isCelsius

	useEffect(() => {
		weatherAPI.getCurrentWeatherArr(locations).then((dat) => setWeatherValue(dat))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locations])
	return (
		<>
			<h3>{catName}</h3>
			{weatherValue.map((loc) => (
				<Card location={loc.location.name} temperature={cel ? loc.current.temp_c : loc.current.temp_f} condition={loc.current.condition.text} key={`${loc.location.name}, ${loc.location.region}`} />
			))}
		</>
	)
}

export default LocationCategory
