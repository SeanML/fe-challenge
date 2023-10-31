import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

import { getData } from '../../request/api';
import { setGradeBalance, setLoansList, tableStore } from '../store/tableStore';
import { aggregateLoans } from '../utils/aggregateLoans';

export const useBootstrapData = () => {
	const { loansList } = useSnapshot(tableStore);

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		if (loansList?.length) {
			const aggregate = aggregateLoans(loansList);

			setGradeBalance(aggregate);
		}
	}, [loansList]);

	const loadData = async () => {
		try {
			const results = await getData();
			setLoansList(results);
		} catch (err) {
			console.error(err);
			setLoansList([]);
		}
	};
};
