import './App.css'
import LandingPage from './components/LandingPage'
import SecondPage from './components/SecondPage'
import { Route, Switch } from 'react-router-dom'
function App() {
	return (
		<div style={{ backgroundColor: '#ebebe0', height: '98vh' }}>
			<Switch>
				<Route path="/second-page" component={SecondPage} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</div>
	)
}

export default App
