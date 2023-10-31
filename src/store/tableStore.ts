import { proxy } from 'valtio';

import { Loan } from '../types/table';

interface TableStore {
	loansList: Loan[];
	gradeToBalance: Map<number, number>;
	homeOwnershipOptions: Set<string>;
	quarterOptions: Set<string>;
	termOptions: Set<string>;
	yearOptions: Set<string>;
	activeFilters: {
		homeOwnership: Set<string>;
		quarters: Set<string>;
		terms: Set<string>;
		years: Set<string>;
	};
}

const defaultTableStore: TableStore = {
	loansList: [],
	gradeToBalance: new Map(),
	homeOwnershipOptions: new Set(),
	quarterOptions: new Set(),
	termOptions: new Set(),
	yearOptions: new Set(),
	activeFilters: {
		homeOwnership: new Set(),
		quarters: new Set(),
		terms: new Set(),
		years: new Set(),
	},
};

export const tableStore = proxy(defaultTableStore);

export const setLoansList = (loans: Loan[]) => {
	tableStore.loansList = loans;
};

export const setGradeToBalance = (gradeBalance: Map<number, number>) => {
	tableStore.gradeToBalance = gradeBalance;
};

export const setHomeOwnershipOptions = (options: Set<string>) => {
	tableStore.homeOwnershipOptions = options;
};

export const setQuarterOptions = (options: Set<string>) => {
	tableStore.quarterOptions = options;
};

export const setTermOptions = (options: Set<string>) => {
	tableStore.termOptions = options;
};

export const setYearOptions = (options: Set<string>) => {
	tableStore.yearOptions = options;
};

export const setActiveFilters = (filters: TableStore['activeFilters']) => {
	tableStore.activeFilters = filters;
};

export const resetFilters = () => {
	tableStore.activeFilters = {
		homeOwnership: new Set(),
		quarters: new Set(),
		terms: new Set(),
		years: new Set(),
	};
};
