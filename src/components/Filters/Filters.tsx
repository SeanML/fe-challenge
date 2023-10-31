import { resetFilters } from '../../store/tableStore';
import { HomeOwnershipFilter } from './HomeOwnership';
import { QuarterFilter } from './Quarter';
import { TermFilter } from './Term';
import { YearFilter } from './Year';
import { filters, resetButton } from './styles';

export const Filters = () => (
	<div className={filters}>
		<HomeOwnershipFilter />
		<QuarterFilter />
		<TermFilter />
		<YearFilter />
		<button className={resetButton} onClick={resetFilters}>
			Reset
		</button>
	</div>
);
