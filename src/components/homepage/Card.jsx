import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ location, temperature, condition }) => {
	const Button = styled.button`
		width: 300px;
		height: 150px;
		background: transparent linear-gradient(153deg, #1e5bfb 0%, #acc2fd 100%) 0% 0% no-repeat;
		box-shadow: 0px 5px 10px #1554ff3e;
		border-radius: 20px;
		border: none;
		margin: 10px 5px 10px 5px;
	`

	return (
		<div>
			<Link to={`location/${location.toLowerCase()}`}>
				<Button>
					<span>{location}</span>
					<div>
						<span clssName='temp'>{!!temperature && parseInt(temperature)}°</span>
					</div>
					<span className='condition'>{condition}</span>
				</Button>
			</Link>
		</div>
	)
}

export default Card
