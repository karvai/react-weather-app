import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
const Button = styled.button`
	width: 100%;
	height: 140px;
	background: linear-gradient(153deg, #1e5bfb 0%, #acc2fd 100%);
	box-shadow: 0rem 0.3125rem 0.625rem rgba(21, 84, 255, 0.25);
	border-radius: 1.25rem;
	border: none;
	margin: 0.6875rem 0rem 0.6875rem 0rem;

	span {
		color: white;
		text-align: left;
	}

	.info {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.location {
		font-size: ${(props) => (props.location.length < 15 ? '1.2rem' : '1rem')};
	}

	.temp {
		font-size: 2.625rem;
	}

	.condition {
		font-size: 0.6875rem;
	}
`

const Container = styled.div`
	margin: 0 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Card = ({ location, icon, temperature, condition }) => {
	return (
		<div>
			<Link to={`location/${location.toLowerCase()}`}>
				<Button location={location}>
					<Container>
						<div className='info'>
							<span className='location'>{location}</span>
							<span className='temp'>{!!temperature ? `${parseInt(temperature)}°` : 'N/A'}</span>
							<span className='condition'>{condition}</span>
						</div>
						<FontAwesomeIcon icon={icon} style={{ filter: 'drop-shadow(0px 4px 6px rgba(255,255,255,.16) )' }} color='white' size='5x' />
					</Container>
				</Button>
			</Link>
		</div>
	)
}

export default Card
