import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70px;

	.value {
		margin-top: 8px;
	}
	.description {
		margin-top: 5px;
		font-size: 12px;
		font-weight: 400;
		color: #f8f8f8;
	}
`

const Details = ({ icon, value, description }) => {
	return (
		<Container>
			<FontAwesomeIcon icon={icon} color='white' size='2x' />
			<span className='value'>{value}</span>
			<span className='description'>{description}</span>
		</Container>
	)
}

export default Details
