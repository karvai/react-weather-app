import React, { useContext } from 'react'
import { AppContext } from '../components/api/AppContext'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Search from './homepage/Search'

const NavBar = () => {
	const { isCelsius, favouritesLocations, savedLocations, currentLocation } = useContext(AppContext)
	const [isCelsiusValue, setIsCelsiusValue] = isCelsius
	const [favouritesLocationsValue, setFavouritesLocationsValue] = favouritesLocations
	const [savedLocationsValue, setSavedLocationsValue] = savedLocations
	const [currentLocationValue] = currentLocation

	console.log('favorite - ' + favouritesLocationsValue)
	console.log('saved - ' + savedLocationsValue)

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
			<>
				<button>
					<Link to={'/'}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</Link>
				</button>
				{savedLocationsValue.includes(currentLocationValue) || favouritesLocationsValue.includes(currentLocationValue) ? (
					<>
						<button onClick={handleFavourite}>
							<FontAwesomeIcon icon={favouritesLocationsValue.includes(currentLocationValue) ? faStar : faStarRegular} />
						</button>

						<button onClick={handleDelete}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</button>
					</>
				) : (
					<div>
						<button onClick={handleSave}>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				)}
			</>
		)
	} else {
		return (
			<>
				<button
					onClick={() => {
						setIsCelsiusValue(!isCelsiusValue)
					}}>
					{isCelsiusValue ? 'C' : 'F'}°
				</button>
				<Search />
			</>
		)
	}
}

export default NavBar
