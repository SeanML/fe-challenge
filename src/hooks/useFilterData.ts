import { useSnapshot } from 'valtio';
import { useEffect } from 'react';

import { setGradeToBalance, tableStore } from '../store/tableStore';
import { processLoans } from '../utils/processLoans';

export const useFilterData = () => {
	const { activeFilters, loansList } = useSnapshot(tableStore);

	useEffect(() => {
		let filtered = loansList;

		// Filter in order of most options to least options: year, quarter, home ownership, term
		if (activeFilters.years.size > 0) {
			filtered = filtered.filter((loan) =>
				Array.from(activeFilters.years).includes(loan.year)
			);
		}

		if (activeFilters.quarters.size > 0) {
			filtered = filtered.filter((loan) =>
				Array.from(activeFilters.quarters).includes(loan.quarter)
			);
		}

		if (activeFilters.homeOwnership.size > 0) {
			filtered = filtered.filter((loan) =>
				Array.from(activeFilters.homeOwnership).includes(
					loan.homeOwnership
				)
			);
		}

		if (activeFilters.terms.size > 0) {
			filtered = filtered.filter((loan) =>
				Array.from(activeFilters.terms).includes(loan.term)
			);
		}

		const { gradeToBalance } = processLoans(filtered);

		const sortedByGrade = new Map([...gradeToBalance.entries()].sort());

		setGradeToBalance(sortedByGrade);
	}, [activeFilters]);
};
