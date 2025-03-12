import { Sections } from '@widgets/sections';
import { Rules } from '@widgets/rules';
import { Details } from '@widgets/details';
import { Conferences } from '@widgets/conferences';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<div className={styles.main}>
			<Sections />
			<Rules />
			<Details />
			<Conferences />
		</div>
	);
};
