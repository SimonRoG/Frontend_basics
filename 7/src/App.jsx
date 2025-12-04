import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import './App.css'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'

function App() {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route path="/" element={
					<>
						<nav>
							<ul>
								<li><Link to="/1">1</Link></li>
								<li><Link to="/2">2</Link></li>
							</ul>
						</nav>
					</>
				} />
				<Route path="/1" element={<Page1 />} />
				<Route path="/2" element={<Page2 />} />
			</Routes>
		</Router>
	)
}

export default App
