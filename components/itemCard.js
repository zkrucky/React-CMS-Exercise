import React from 'react';

export default function ItemCard({ item }) {
	return (
		<article className="item-card">
			<h2>{item.name}</h2>
			<p>Price: {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
			<p>Rating: {item.rating} / 5</p>
		</article>
	);
}
