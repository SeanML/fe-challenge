import { useSnapshot } from 'valtio';
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { useMemo } from 'react';

import { tableStore } from '../../store/tableStore';

export const Chart = () => {
	const { gradeToBalance } = useSnapshot(tableStore);

	const data = useMemo(
		() =>
			[...gradeToBalance.entries()].map(([grade, balance]) => ({
				grade: grade.toString(),
				balance,
			})),
		[gradeToBalance]
	);

	return (
		<ResponsiveContainer width="100%" height="60%">
			<BarChart
				width={1000}
				height={600}
				data={data}
				margin={{ left: 60, right: 60, bottom: 40 }}
			>
				<XAxis
					dataKey="grade"
					tickFormatter={(value) => `Grade ${value}`}
				/>
				<YAxis
					tickFormatter={(value) =>
						new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
							useGrouping: false,
						}).format(value)
					}
				/>
				<Tooltip
					labelFormatter={(value) => `Grade ${value}`}
					formatter={(value) => {
						return [
							new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
								useGrouping: false,
							}).format(value as number),
							'Balance',
						];
					}}
				/>
				<Bar dataKey="balance" fill="#1a53ff" barSize={50} />
			</BarChart>
		</ResponsiveContainer>
	);
};
