import { FC } from 'react';

import { useBootstrapData } from '../../hooks/useBootstrapData';
import { Table } from '../Table/Table';
import { Filters } from '../Filters/Filters';
import { useFilterData } from '../../hooks/useFilterData';
import { Chart } from '../Chart/Chart';

import './App.css';

export const App: FC = () => {
	useBootstrapData();
	useFilterData();

	return (
		<section style={{ height: '60vh' }}>
			<h2>Loan grade to loan balance</h2>
			<Chart />
			<Table />
			<Filters />
		</section>
	);
};
