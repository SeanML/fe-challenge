import { FC } from 'react';

import { useBootstrapData } from '../../hooks/useBootstrapData';

import './App.css';

export const App: FC = () => {
	useBootstrapData();

	return <div>Components go here</div>;
};
