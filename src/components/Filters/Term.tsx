import { FC, useMemo } from 'react';
import Select, { MultiValue } from 'react-select';
import { useSnapshot } from 'valtio';

import { setActiveFilters, tableStore } from '../../store/tableStore';
import { filter } from './styles';

export const TermFilter: FC = () => {
	const { activeFilters, termOptions } = useSnapshot(tableStore);

	const options = useMemo(
		() =>
			Array.from(termOptions).map((opt) => ({
				label: opt,
				value: opt,
			})),
		[termOptions]
	);

	const handleFilterChange = (
		values: MultiValue<{ label: string; value: string }>
	) => {
		const filters = values.map(({ value }) => value);

		setActiveFilters({
			...activeFilters,
			terms: new Set(filters),
		});
	};

	return (
		<Select
			className={filter}
			placeholder="Term"
			isMulti
			name="term"
			options={options}
			onChange={handleFilterChange}
			value={Array.from(activeFilters.terms).map((val) => ({
				label: val,
				value: val,
			}))}
		/>
	);
};
