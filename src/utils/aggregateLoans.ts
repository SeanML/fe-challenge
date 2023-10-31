import { Loan } from '../types/table';

export const aggregateLoans = (loans: readonly Loan[]): Map<string, number> => {
	const aggregate = new Map();

	for (const { currentBalance, grade } of loans) {
		if (!grade || !currentBalance) {
			continue;
		}

		if (!aggregate.has(grade)) {
			aggregate.set(grade, 0);
		}

		aggregate.set(grade, aggregate.get(grade) + Number(currentBalance));
	}

	return aggregate;
};
