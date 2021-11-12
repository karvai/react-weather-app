import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 55px;

	.date {
		color: black;
	}
	.temperature {
		color: #3d71fc;
		font-size: 35px;
		margin-top: 15px;
	}

	svg {
		margin-top: 10px;
	}
`

const WeatherOtherDay = ({ date, temperature, icon }) => {
	return (
		<Container>
			<span className='date'>{date}</span>
			<span className='temperature'>{!!temperature ? `${parseInt(temperature)}°` : 'N/A'}</span>
			<FontAwesomeIcon icon={icon} color='#3D71FC' style={{ filter: 'drop-shadow(0px 4px 6px rgba(61,113,252,.20) )' }} size='3x' />
		</Container>
	)
}

export default WeatherOtherDay
