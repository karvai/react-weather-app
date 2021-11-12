import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal'
import { weatherAPI } from '../api/FetchData'
import styled from 'styled-components'

// styles
const SearchInput = styled.input`
	margin-top: 20px;
	background-color: white;
	font-weight: 400;
	font-size: 18px;
	padding: 15px 20px;
	width: 75%;
	border: 4px solid #2761fb;
	border-radius: 20px;
	box-shadow: 0 5px 10px rgba(21, 84, 255, 0.25);
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	background-color: white;
	width: 90%;
	border: ${(props) => (props.resultsArr.length !== 0 ? '4px solid #2761fb' : 'none')};
	border-radius: 20px;
	box-shadow: 0 5px 10px rgba(21, 84, 255, 0.25);

	a {
		font-weight: 400;
		color: black;
		text-decoration: none;
		cursor: default;
		padding: 13px;
		padding-bottom: 0px; // must stay 0 to compensate border at the bottom
	}
	.border {
		border-bottom: 1px solid #7a7a7a;
		padding-bottom: 13px;
	}
	a:last-child .border {
		border-bottom: none;
	}
`

const Search = ({ open, handleClose }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [resultsArr, setResultsArr] = useState([])

	const handleSearch = (e) => {
		setSearchQuery(e.target.value)
		searchQuery.length > 2 && setResultsArr([])
	}

	useEffect(() => {
		!!searchQuery && searchQuery.length > 2 && weatherAPI.getSearchLocationResults(searchQuery).then((dat) => setResultsArr(dat))
	}, [searchQuery])

	return (
		<>
			<Modal open={open} onClose={handleClose}>
				<Container>
					<SearchInput autoFocus type='text' placeholder='Search Location' value={searchQuery} onChange={handleSearch} />
					<SearchResults resultsArr={resultsArr}>
						{resultsArr.length !== 0 &&
							resultsArr.map((item) => (
								<Link to={`location/${item.name.split(',')[0].toLowerCase()}`} key={item.name} onClick={handleClose}>
									{`${item.name.split(',')[0]}, ${item.country}`}
									<div className='border'></div>
								</Link>
							))}
					</SearchResults>
				</Container>
			</Modal>
		</>
	)
}

export default Search
