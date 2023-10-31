import { FC, useMemo } from 'react';
import Select, { MultiValue } from 'react-select';
import { useSnapshot } from 'valtio';

import { setActiveFilters, tableStore } from '../../store/tableStore';
import { filter } from './styles';

export const YearFilter: FC = () => {
	const { activeFilters, yearOptions } = useSnapshot(tableStore);

	const options = useMemo(
		() =>
			Array.from(yearOptions).map((opt) => ({
				label: opt,
				value: opt,
			})),
		[yearOptions]
	);

	const handleFilterChange = (
		values: MultiValue<{ label: string; value: string }>
	) => {
		const filters = values.map(({ value }) => value);

		setActiveFilters({
			...activeFilters,
			years: new Set(filters),
		});
	};

	return (
		<Select
			className={filter}
			placeholder="Year"
			isMulti
			name="year"
			options={options}
			onChange={handleFilterChange}
			value={Array.from(activeFilters.years).map((val) => ({
				label: val,
				value: val,
			}))}
		/>
	);
};
