import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './conference.module.scss';

interface Props {
	className?: string;
	iconClassName?: string;
	iconName: string;
	title: string;
	link: string;
	description: string;
	date: string;
	dateColor: 'red' | 'green';
	city: string;
}

export const Conference = ({
	className,
	iconClassName,
	iconName,
	title,
	link,
	description,
	date,
	dateColor,
	city
}: Props) => {
	return (
		<a
			className={clsx(styles.conference, className)}
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<SvgIcon className={clsx(styles.icon, iconClassName)} name={iconName} />
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.description}>{description}</p>
			<div className={styles.info}>
				<p
					className={clsx(styles.date, {
						[styles['date--red']]: dateColor === 'red',
						[styles['date--green']]: dateColor === 'green'
					})}
				>
					{date}
				</p>
				<p className={styles.city}>г. {city}</p>
			</div>
		</a>
	);
};
