import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import WeatherDetails from './components/weather-details'
import NavBar from './components/NavBar'
import ReactDOM from 'react-dom'
import { AppProvider } from './components/api/AppContext'
import { createGlobalStyle } from 'styled-components'

// styles
const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	outline: none;
	}
	body{
		background-color:#FAFAFA;
	}
`

function WeatherApp() {
	return (
		<Router>
			<GlobalStyle />
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
