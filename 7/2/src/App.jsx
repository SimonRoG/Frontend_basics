import './App.css';
import React from 'react';
import GoodsCard from './GoodsCard';

import vwImg from './assets/vw.jpg';
import hondaImg from './assets/honda.jpg';
import toyotaImg from './assets/toyota.jpg';
import audiImg from './assets/audi.jpg';
import volvoImg from './assets/volvo.jpg';
import mazdaImg from './assets/mazda.jpg';

function App() {
	return (
		<>
			<div id="goods">
				<GoodsCard
					imgSrc={vwImg}
					name="VW Golf"
					price="29.395"
				/>
				<GoodsCard
					imgSrc={hondaImg}
					name="Honda Civic"
					price="37.900"
				/>
				<GoodsCard
					imgSrc={toyotaImg}
					name="Toyota Land Cruiser"
					price="82.490"
				/>
				<GoodsCard
					imgSrc={audiImg}
					name="Audi A6"
					price="55.500"
				/>
				<GoodsCard
					imgSrc={volvoImg}
					name="Volvo V60"
					price="48.590"
				/>
				<GoodsCard
					imgSrc={mazdaImg}
					name="Mazda CX-30"
					price="29.440,00"
				/>
			</div>
		</>
	);
}

export default App;