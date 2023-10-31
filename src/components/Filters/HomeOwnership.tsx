import { FC, useMemo } from 'react';
import Select, { MultiValue } from 'react-select';
import { useSnapshot } from 'valtio';

import { setActiveFilters, tableStore } from '../../store/tableStore';
import { filter } from './styles';

export const HomeOwnershipFilter: FC = () => {
	const { activeFilters, homeOwnershipOptions } = useSnapshot(tableStore);

	const options = useMemo(
		() =>
			Array.from(homeOwnershipOptions).map((opt) => ({
				label: opt,
				value: opt,
			})),
		[homeOwnershipOptions]
	);

	const handleFilterChange = (
		values: MultiValue<{ label: string; value: string }>
	) => {
		const filters = values.map(({ value }) => value);

		setActiveFilters({
			...activeFilters,
			homeOwnership: new Set(filters),
		});
	};

	return (
		<Select
			className={filter}
			placeholder="Home Ownership"
			isMulti
			name="homeOwnership"
			options={options}
			onChange={handleFilterChange}
			value={Array.from(activeFilters.homeOwnership).map((val) => ({
				label: val,
				value: val,
			}))}
		/>
	);
};
