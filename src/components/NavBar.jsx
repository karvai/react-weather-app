import React, { useContext, useState } from 'react'
import { AppContext } from '../components/api/AppContext'
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch, faStar, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import Search from './homepage/Search'
import styled from 'styled-components'

// styles
const NavButton = styled.button`
	color: white;
	font-size: 25px;
	width: 100px;
	height: 57px;
	border: none;
	background: linear-gradient(178deg, rgb(76, 67, 251) 0%, rgb(115, 106, 224) 100%);
	box-shadow: 0 5px 10px rgba(21, 84, 255, 0.25);
	border-radius: 20px;
`

const Container = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	padding: 20px 0;
`

const NavBar = () => {
	const { isCelsius, favouritesLocations, savedLocations, currentLocation } = useContext(AppContext)
	const [isCelsiusValue, setIsCelsiusValue] = isCelsius
	const [favouritesLocationsValue, setFavouritesLocationsValue] = favouritesLocations
	const [savedLocationsValue, setSavedLocationsValue] = savedLocations
	const [currentLocationValue] = currentLocation

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleFavourite = () => {
		if (favouritesLocationsValue.includes(currentLocationValue)) {
			setFavouritesLocationsValue(
				favouritesLocationsValue.filter((loc) => {
					return loc !== currentLocationValue
				})
			)
			setSavedLocationsValue([...savedLocationsValue, currentLocationValue])
		} else {
			setFavouritesLocationsValue([...favouritesLocationsValue, currentLocationValue])
			setSavedLocationsValue(
				savedLocationsValue.filter((loc) => {
					return loc !== currentLocationValue
				})
			)
		}
	}

	const handleSave = () => {
		if (savedLocationsValue.includes(currentLocationValue)) {
			setSavedLocationsValue(
				savedLocationsValue.filter((loc) => {
					return loc !== currentLocationValue
				})
			)
		} else {
			setSavedLocationsValue([...savedLocationsValue, currentLocationValue])
		}
	}

	const handleDelete = () => {
		setFavouritesLocationsValue(
			favouritesLocationsValue.filter((loc) => {
				return loc !== currentLocationValue
			})
		)

		setSavedLocationsValue(
			savedLocationsValue.filter((loc) => {
				return loc !== currentLocationValue
			})
		)
	}

	if (useLocation().pathname.includes('location')) {
		return (
			<Container>
				<Link to={'/'} style={{ color: 'white', cursor: 'default' }}>
					<NavButton>
						<FontAwesomeIcon icon={faChevronLeft} style={{ paddingRight: '5px' }} />
					</NavButton>
				</Link>
				{savedLocationsValue.includes(currentLocationValue) || favouritesLocationsValue.includes(currentLocationValue) ? (
					<>
						<NavButton onClick={handleFavourite}>
							<FontAwesomeIcon icon={favouritesLocationsValue.includes(currentLocationValue) ? faStar : faStarRegular} />
						</NavButton>

						<NavButton onClick={handleDelete}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</NavButton>
					</>
				) : (
					<div>
						<NavButton onClick={handleSave}>
							<FontAwesomeIcon icon={faPlus} />
						</NavButton>
					</div>
				)}
			</Container>
		)
	} else {
		return (
			<Container>
				<NavButton
					onClick={() => {
						setIsCelsiusValue(!isCelsiusValue)
					}}>
					{isCelsiusValue ? 'C' : 'F'}°
				</NavButton>
				<NavButton onClick={handleOpen}>
					<FontAwesomeIcon icon={faSearch} />
				</NavButton>
				<Search open={open} handleClose={handleClose} />
			</Container>
		)
	}
}

export default NavBar
