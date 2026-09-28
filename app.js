import SearchBar from './components/searchBar';
import ResultsTable from './components/resultsTable';
import useProductSearch from './hooks/useProductSearch';

export default function App() {
	const { products, setSearchTerm } = useProductSearch();

	return (
		<main>
			<SearchBar onSearch={setSearchTerm} />
			<ResultsTable products={products} />
		</main>
	);
}
