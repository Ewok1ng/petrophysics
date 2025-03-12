import { Conference } from '@entities/conference';

import styles from './conferences.module.scss';

interface IConference {
	id: number;
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

const conferences: IConference[] = [
	{
		id: 1,
		iconClassName: styles.upexpro,
		city: 'Казань',
		date: '10-12 апреля 2025',
		dateColor: 'green',
		description: 'IX Мeждународная молодежная научная конференция',
		title: 'Tatarstan UpExPro',
		iconName: 'upexpro',
		link: 'https://tuep.ru/'
	},
	{
		id: 2,
		iconClassName: styles.oil,
		city: 'Альметевск',
		date: '20-22 мая 2025',
		dateColor: 'red',
		description: 'II Международная конференция',
		title: 'ТРУДНОИЗВЛЕКАЕМЫЕ ЗАПАСЫ НЕФТИ',
		iconName: 'oil',
		link: 'https://htrconference.com/'
	},
	{
		id: 3,
		iconClassName: styles.kfu,
		city: 'Казань',
		date: '30 мая 2025',
		dateColor: 'green',
		description: 'Техническая сессия',
		title: 'РАЗРАБОТКА ГАЗОКОНДЕНСАТНЫХ МЕСТОРОЖДЕНИЙ',
		iconName: 'gazprom-kfu',
		link: 'https://t.me/+f4bvVmRZzVc2NjFi'
	},
	{
		id: 4,
		iconClassName: styles.pgc,
		city: 'Казань',
		date: '25-27 июня 2025',
		dateColor: 'green',
		description:
			'IV Научно-практическая конференция по нефтяной гидрогеологии, геохимии и гидродинамическому моделированию ',
		title: 'Practice GeoChemistry',
		iconName: 'pgc',
		link: 'https://pgcconf.ru/'
	},
	{
		id: 5,
		iconClassName: styles.neural,
		city: 'Казань',
		date: '17-18 июля 2025',
		dateColor: 'green',
		description: 'Круглый стол',
		title:
			'Актуальные направления цифровизации и развития нейросетевых технологий в нефтегазовой отравли',
		iconName: 'neural',
		link: 'https://t.me/+bC81bXWSHqkyZDU6'
	},
	{
		id: 6,
		iconClassName: styles.carbon,
		city: 'Казань',
		date: '13-15 августа 2025',
		dateColor: 'green',
		description: 'II Международная научно-практическая конференция ',
		title: 'Карбонатные отложения',
		iconName: 'carbon',
		link: 'https://karb0n.ru/'
	}
];

export const Conferences = () => {
	return (
		<section className={styles.conferences}>
			<div className={styles.container}>
				<div className={styles.inner}>
					<h3 className={styles.title}>Ближайшие конференции</h3>
					<div className={styles.items}>
						{conferences.map(({ id, ...props }) => (
							<Conference key={id} {...props} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
