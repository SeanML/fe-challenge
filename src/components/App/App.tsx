import { FC } from 'react';

import { useBootstrapData } from '../../hooks/useBootstrapData';
import { Table } from '../Table/Table';
import { Filters } from '../Filters/Filters';
import { useFilterData } from '../../hooks/useFilterData';

import './App.css';

export const App: FC = () => {
	useBootstrapData();
	useFilterData();

	return (
		<section>
			<Table />
			<Filters />
		</section>
	);
};
