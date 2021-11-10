import React from 'react'

const LocView = ({ location, temperature, condition, wind, humidity, visibility }) => {
	return (
		<>
			<span>{location}</span>
			<span>{!!temperature && parseInt(temperature)}°</span>
			<span>{condition}</span>
			<span>{wind} mph</span>
			<span>{humidity} %</span>
			<span>{visibility} miles</span>
		</>
	)
}

export default LocView
