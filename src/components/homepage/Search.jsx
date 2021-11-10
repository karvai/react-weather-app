import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal'
import ListItem from '@mui/material/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { weatherAPI } from '../api/FetchData'

const Search = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

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
			<button onClick={handleOpen}>
				<FontAwesomeIcon icon={faSearch} />
			</button>
			<Modal open={open} onClose={handleClose}>
				<div>
					<input type='text' placeholder='Search Location' value={searchQuery} onChange={handleSearch} />
					{resultsArr.length !== 0 &&
						resultsArr.map((item) => (
							<Link to={`location/${item.name.split(',')[0].toLowerCase()}`} key={item.name} onClick={handleClose}>
								<ListItem>{item.name}</ListItem>
							</Link>
						))}
				</div>
			</Modal>
		</>
	)
}

export default Search
