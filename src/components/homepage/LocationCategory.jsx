import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../api/AppContext'
import { weatherAPI } from '../api/FetchData'
import Card from './Card'

// styles
const Category = styled.h3`
	font-size: 1.125rem;
	margin-top: 15px;
`

const LocationCategory = ({ catName, locations, weatherValue, setWeatherValue }) => {
	const { isCelsius, conditionWeatherIcon } = useContext(AppContext)
	const [cel] = isCelsius

	useEffect(() => {
		weatherAPI.getCurrentWeatherArr(locations).then((dat) => setWeatherValue(dat))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locations])

	return (
		<>
			<Category>{catName}</Category>
			{weatherValue.map((loc) => (
				<Card location={loc.location.name} icon={conditionWeatherIcon(loc.location.localtime, loc.current.condition.text)} temperature={cel ? loc.current.temp_c : loc.current.temp_f} condition={loc.current.condition.text} key={`${loc.location.name}, ${loc.location.region}`} />
			))}
		</>
	)
}

export default LocationCategory
