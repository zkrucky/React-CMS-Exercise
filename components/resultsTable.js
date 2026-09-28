import React from 'react';
import ItemCard from './itemCard';

export default function ResultsTable({ products }) {
	if (products.length === 0) {
		return <p role="status">No matching products found.</p>;
	}

	return (
		<section className="results-list" aria-label="Search results">
			{products.map((product) => (
				<ItemCard key={product.id} item={product} />
			))}
		</section>
	);
}
