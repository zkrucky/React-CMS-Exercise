import { useState } from 'react';
import mockProducts from '../mockProducts';

export default function useProductSearch() {
	const [searchTerm, setSearchTerm] = useState('');

	const searchProducts = mockProducts.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return {
		searchTerm,
		setSearchTerm,
		products: searchProducts
	};
}