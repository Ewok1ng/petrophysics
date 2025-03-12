import clsx from 'clsx';

import { Section } from '@entities/section';

import styles from './sections.module.scss';

interface ISection {
	id: number;
	iconName: string;
	title: string;
}

const sections: ISection[] = [
	{
		id: 1,
		iconName: 'section-1',
		title: 'Исследования керна, шлама и пластовых флюидов'
	},
	{
		id: 2,
		iconName: 'section-2',
		title: 'Аппаратура ГИС и современное скважинное оборудование'
	},
	{
		id: 3,
		iconName: 'section-3',
		title: 'Исследования и моделирование сложнопостроенных коллекторов'
	},
	{
		id: 4,
		iconName: 'section-4',
		title: 'Горизонтальные скважины и геологическое сопровождение бурения'
	},
	{
		id: 5,
		iconName: 'section-5',
		title:
			'Программные средства и инструменты автоматизации процесса интерпретации материалов ГИС'
	},
	{
		id: 6,
		iconName: 'section-6',
		title: 'Геомеханическое и петроупругое моделирование'
	}
];

export const Sections = () => {
	const getSize = (id: number) => {
		if (id === 3) {
			return 'lg';
		}

		if (id === 2 || id === 4) {
			return 'md';
		}

		return;
	};

	return (
		<section className={styles.section}>
			<div className={styles.section__top}>
				<div className={clsx(styles.wrapper, styles['wrapper--top'])}>
					<div className={styles.title}>
						<div className={styles.container}>
							<h3 className={styles.title__inner}>Выбираем секцию</h3>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{sections.map(({ id, ...props }) => (
						<Section key={id} size={getSize(id)} {...props} />
					))}
				</div>
			</div>
			<div className={styles.section__bottom}>
				<div className={clsx(styles.wrapper, styles['wrapper--bottom'])}>
					<div className={styles.subtitle}>
						<div className={styles.container}>
							<h3 className={styles.subtitle__inner}>
								Круглые столы и мастер-классы
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
