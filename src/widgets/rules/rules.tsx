import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './rules.module.scss';

export const Rules = () => {
	return (
		<div className={styles.rules}>
			<div className={styles.container}>
				<div className={styles.inner}>
					<h3 className={styles.title}>Принять участие проще простого...</h3>
					<p className={styles.caption}>Правила и условия подачи тезисов</p>
					<div className={styles.content}>
						<div className={styles.column}>
							<div className={styles.column__number}>1</div>
							<div className={styles.column__content}>
								<p className={styles.column__text}>
									Пройти регистрацию и прислать тезисы до{' '}
									<span className={styles.highlight}>01/08/2025</span>
									<a className={styles.registration} href="#">
										<span className={styles.registration__text}>
											Регистрация
										</span>
										<SvgIcon
											className={styles.registration__icon}
											name="link"
										/>
									</a>
								</p>
								<p className={styles.column__text}>
									Правила участия и шаблон оформления тезиса можно скачать здесь
								</p>
							</div>
						</div>
						<div className={styles.column}>
							<div className={styles.column__number}>2</div>
							<div className={styles.column__content}>
								<p className={styles.column__text}>
									Оплатить взносы за участие до{' '}
									<span className={styles.highlight}>15/08/2025</span>
								</p>
							</div>
						</div>
						<div className={styles.column}>
							<div className={styles.column__number}>3</div>
							<div className={styles.column__content}>
								<p className={styles.column__text}>
									Дождаться рассылки предварительной программы и резенрвирования
									отеля до <span className={styles.highlight}>01/09/2025</span>
								</p>
								<p className={styles.column__text}>
									Участники самостоятельно оплачивают транспортные расходы при
									переезде
								</p>
							</div>
						</div>
						<div className={styles.column}>
							<div className={styles.column__number}>4</div>
							<div className={styles.column__content}>
								<p className={styles.column__text}>
									Приехать в Казань, заселиться в отель и присутствовать на
									конференции
									<div className={styles.highlight}>30/09/2025 - 2/10/2025</div>
								</p>
								<p className={styles.column__text}>
									В дни проведения конференции для всех участников конференции
									будут организованы обеды и кофе-брейки
								</p>
							</div>
						</div>
						<div className={clsx(styles.column, styles['column--table'])}>
							<div className={styles.column__number}></div>
							<div
								className={clsx(
									styles.column__content,
									styles['column__content--table']
								)}
							>
								<h5 className={styles.column__title}>
									Стоимость участия в рублях, включая НДС 20%
								</h5>
								<div className={styles.table}>
									<div className={styles.table__row}>
										<div className={styles.table__column}></div>
										<div className={styles.table__column}>
											Докладчик, член комитета
										</div>
										<div className={styles.table__column}>
											Слушатель (делегат)
										</div>
										<div className={styles.table__column}>
											Оплата после мероприятия
										</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											<b>Члены Ассоциации АГГИ</b>
										</div>
										<div className={styles.table__column}>45 000</div>
										<div className={styles.table__column}>59 000</div>
										<div className={styles.table__column}>74 000</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											<b>Обычная стоимость</b>
										</div>
										<div className={styles.table__column}>54 000</div>
										<div className={styles.table__column}>70 000</div>
										<div className={styles.table__column}>88 000</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											<b>Льготная стоимость</b>
											<span>студенты/аспиранты</span>
											<span>неработающие пенсионеры</span>
										</div>
										<div className={styles.table__column}>17 000</div>
										<div className={styles.table__column}>17 000</div>
										<div className={styles.table__column}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
