import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faEye } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../api/AppContext'
import Details from './Details'

// styles
const Container = styled.div`
	background: linear-gradient(180deg, rgb(61, 113, 252) 0%, rgb(143, 173, 253) 100%);
	box-shadow: 0px 5px 10px rgba(21, 84, 255, 0.24);
	border-radius: 0px 0px 30px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	svg {
		margin-top: 20px;
	}

	span {
		color: white;
	}

	.location {
		margin: 0 3%;
		text-align: center;
		margin-top: 35px;
		font-size: 38px;
	}

	.temperature {
		margin-top: 5px;
		font-size: 50px;
	}

	.condition {
		margin-top: 15px;
		font-size: 14px;
	}
	.details {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin: 20px 0 40px 0;
	}
`

const LocView = ({ location, localtime, temperature, condition, wind, humidity, visibility }) => {
	const { conditionWeatherIcon } = useContext(AppContext)

	return (
		<Container>
			<span className='location'>{location}</span>
			<span className='temperature'>{!!temperature ? `${parseInt(temperature)}°` : 'N/A'}</span>
			<FontAwesomeIcon icon={conditionWeatherIcon(localtime, condition)} style={{ filter: 'drop-shadow(0px 4px 6px rgba(255,255,255,.16) )' }} color='white' size='6x' />
			<span className='condition'>{condition}</span>
			<div className='details'>
				<Details icon={faWind} value={`${!!wind ? `${parseInt(wind)} km/h` : 'N/A'} `} description='Wind' />
				<Details icon={faTint} value={`${humidity} %`} description='Humidity' />
				<Details icon={faEye} value={`${visibility} km`} description='Visibility' />
			</div>
		</Container>
	)
}

export default LocView
