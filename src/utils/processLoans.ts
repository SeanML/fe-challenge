import { Loan } from '../types/table';

export const processLoans = (
	loans: readonly Loan[]
): {
	gradeToBalance: Map<number, number>;
	homeOwnership: Set<string>;
	quarters: Set<string>;
	terms: Set<string>;
	years: Set<string>;
} => {
	const gradeToBalance = new Map<number, number>();

	const uHomeOwnership = new Set<string>();
	const uQuarters = new Set<string>();
	const uTerms = new Set<string>();
	const uYears = new Set<string>();

	for (const loan of loans) {
		const { currentBalance, grade, homeOwnership, quarter, term, year } =
			loan;
		if (!grade || !currentBalance) {
			continue;
		}

		if (homeOwnership) {
			uHomeOwnership.add(homeOwnership);
		}

		if (quarter) {
			uQuarters.add(quarter);
		}

		if (term) {
			uTerms.add(term);
		}

		if (year) {
			uYears.add(year);
		}

		const numBalance = Number(currentBalance);
		const numGrade = Number(grade);

		if (!gradeToBalance.has(numGrade)) {
			gradeToBalance.set(numGrade, 0);
		}

		gradeToBalance.set(numGrade, gradeToBalance.get(numGrade) + numBalance);
	}

	return {
		gradeToBalance,
		homeOwnership: uHomeOwnership,
		quarters: uQuarters,
		terms: uTerms,
		years: uYears,
	};
};
