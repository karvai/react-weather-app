import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import WeatherDetails from './components/weather-details'
import NavBar from './components/NavBar'
import ReactDOM from 'react-dom'
import { AppProvider } from './components/api/AppContext'

function WeatherApp() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route exact path='/location/:loc' element={<WeatherDetails />} />
			</Routes>
			<NavBar />
		</Router>
	)
}

export default WeatherApp

ReactDOM.render(
	<AppProvider>
		<WeatherApp />
	</AppProvider>,
	document.getElementById('root')
)
