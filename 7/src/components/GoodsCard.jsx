import React from 'react';
import './css/GoodsCard.css';

const GoodsCard = ({ imgSrc, name, price }) => (
	<div className="goodscard">
		<img
			src={imgSrc}
			alt={name}
		/>
		<h3>{name}</h3>
		<p>{price} €</p>
	</div>
);

export default GoodsCard;


