import { Petrophysic } from '@widgets/petrophysic';
import { Experts } from '@widgets/experts';
import { Sections } from '@widgets/sections';
import { Rules } from '@widgets/rules';
import { Details } from '@widgets/details';
import { Conferences } from '@widgets/conferences';

import { Industry } from '@widgets/industry';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<div className={styles.main}>
			<Petrophysic />
			<Industry />
			<Experts />
			<Sections />
			<Rules />
			<Details />
			<Conferences />
		</div>
	);
};
