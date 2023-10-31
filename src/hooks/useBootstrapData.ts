import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

import { getData } from '../../request/api';
import {
	setGradeToBalance,
	setHomeOwnershipOptions,
	setLoansList,
	setQuarterOptions,
	setTermOptions,
	setYearOptions,
	tableStore,
} from '../store/tableStore';
import { processLoans } from '../utils/processLoans';

export const useBootstrapData = () => {
	const { loansList } = useSnapshot(tableStore);

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		if (loansList?.length) {
			const { gradeToBalance, homeOwnership, quarters, terms, years } =
				processLoans(loansList);

			const sortedByGrade = new Map([...gradeToBalance.entries()].sort());

			setGradeToBalance(sortedByGrade);

			setHomeOwnershipOptions(homeOwnership);
			setQuarterOptions(new Set([...quarters].sort()));
			setTermOptions(new Set([...terms].sort()));
			setYearOptions(new Set([...years].sort()));
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
