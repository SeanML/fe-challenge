import { proxy } from 'valtio';

import { Loan } from '../types/table';

interface TableStore {
	loansList: Loan[];
	gradeBalance: Map<string, number>;
}

const defaultTableStore: TableStore = {
	loansList: [],
	gradeBalance: new Map(),
};

export const tableStore = proxy(defaultTableStore);

export const setLoansList = (loans: Loan[]) => {
	tableStore.loansList = loans;
};

export const setGradeBalance = (gradeBalance: Map<string, number>) => {
	tableStore.gradeBalance = gradeBalance;
};
