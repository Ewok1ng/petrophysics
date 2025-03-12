import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './section.module.scss';

interface Props {
	size?: 'md' | 'lg';
	iconName: string;
	title: string;
}

export const Section = ({ size, iconName, title }: Props) => {
	return (
		<div
			className={clsx(styles.item, {
				[styles['item--middle']]: size === 'md',
				[styles['item--large']]: size === 'lg'
			})}
		>
			<SvgIcon className={styles.icon} name={iconName} />
			<h5 className={styles.title}>{title}</h5>
		</div>
	);
};
