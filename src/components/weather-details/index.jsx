import React, { useEffect, useContext } from 'react'
import { weatherAPI } from '../api/FetchData'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../api/AppContext'
import LocView from '../weather-details/LocView'
import WeatherOtherDay from './WeatherOtherDay'
import styled from 'styled-components'

// styles
const OtherDayContainer = styled.div`
	margin-top: 45px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const DetailedLocWeather = () => {
	const { detailedWeather, isCelsius, currentLocation, conditionWeatherIcon } = useContext(AppContext)
	const [detailedWeatherValue, setDetailedWeatherValue] = detailedWeather
	const [cel] = isCelsius
	const [currentLocationValue, setCurrentLocation] = currentLocation

	// gets the city name from URL
	const currentURLlocationArr = useLocation().pathname.split('/')
	const currentLocationName = currentURLlocationArr[currentURLlocationArr.length - 1]

	// fetches the data from weather API when component is mount
	useEffect(() => {
		weatherAPI.getForecastThreeDays(currentLocationName).then((dat) => {
			setDetailedWeatherValue(dat)
			setCurrentLocation(dat.location.name.toLowerCase())
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLocationValue])

	return (
		<>
			{detailedWeatherValue.length !== 0 ? (
				<>
					<LocView location={detailedWeatherValue.location.name} localtime={detailedWeatherValue.location.localtime} temperature={cel ? detailedWeatherValue.current.temp_c : detailedWeatherValue.current.temp_f} condition={detailedWeatherValue.current.condition.text} wind={detailedWeatherValue.current.wind_kph} humidity={detailedWeatherValue.current.humidity} visibility={detailedWeatherValue.current.vis_km} />
					<OtherDayContainer>
						{detailedWeatherValue.forecast.forecastday.map((da) => (
							<WeatherOtherDay date={new Date(da.date).toLocaleString('default', { day: 'numeric', month: 'short' })} temperature={cel ? da.day.maxtemp_c : da.day.maxtemp_f} icon={conditionWeatherIcon('12:00', da.day.condition.text)} key={da.date} />
						))}
					</OtherDayContainer>
				</>
			) : (
				<span>Loading...</span>
			)}
		</>
	)
}

export default DetailedLocWeather
