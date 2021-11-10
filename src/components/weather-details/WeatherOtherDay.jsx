import React from 'react'

const WeatherOtherDay = ({ date, temperature, condition }) => {
	return (
		<>
			<span>{date}</span>
			<span>{!!temperature && parseInt(temperature)}°</span>
		</>
	)
}

export default WeatherOtherDay
