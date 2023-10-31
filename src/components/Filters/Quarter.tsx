import { FC, useMemo } from 'react';
import Select, { MultiValue } from 'react-select';

import { useSnapshot } from 'valtio';
import { setActiveFilters, tableStore } from '../../store/tableStore';
import { filter } from './styles';

export const QuarterFilter: FC = () => {
	const { activeFilters, quarterOptions } = useSnapshot(tableStore);

	const options = useMemo(
		() =>
			Array.from(quarterOptions).map((opt) => ({
				label: opt,
				value: opt,
			})),
		[quarterOptions]
	);

	const handleFilterChange = (
		values: MultiValue<{ label: string; value: string }>
	) => {
		const filters = values.map(({ value }) => value);

		setActiveFilters({
			...activeFilters,
			quarters: new Set(filters),
		});
	};

	return (
		<Select
			className={filter}
			placeholder="Quarter"
			isMulti
			name="quarter"
			options={options}
			onChange={handleFilterChange}
			value={Array.from(activeFilters.quarters).map((val) => ({
				label: val,
				value: val,
			}))}
		/>
	);
};
