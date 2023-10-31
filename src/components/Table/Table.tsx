import React, { FC } from 'react';
import { useSnapshot } from 'valtio';

import { tableStore } from '../../store/tableStore';
import { table, tableColumn, tableRow } from './styles';

export const Table: FC = () => {
	const { gradeToBalance } = useSnapshot(tableStore);

	return (
		<table className={table}>
			<tbody>
				<tr className={tableRow}>
					{[...gradeToBalance.keys()].map((grade) => (
						<React.Fragment key={grade}>
							<td className={tableColumn}>{`Grade ${grade}`}</td>
						</React.Fragment>
					))}
				</tr>
				<tr className={tableRow}>
					{[...gradeToBalance.entries()].map(([grade, balance]) => (
						<React.Fragment key={`${grade}-balance`}>
							<td className={tableColumn}>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD',
									useGrouping: false,
								}).format(balance)}
							</td>
						</React.Fragment>
					))}
				</tr>
			</tbody>
		</table>
	);
};
