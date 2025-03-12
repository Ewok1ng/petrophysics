import { SvgIcon } from '@shared/ui';

import styles from './industry.module.scss';

export const Industry = () => {
	return (
		<section className={styles.industry}>
			<div className={styles.industry__wrapper}>
				<div className={styles.container}>
					<div className={styles.industry__inner}>
						<div className={styles.industry__header}>
							<h2 className={styles.industry__title}>
								Меняем индустрию совместно с
							</h2>
							<div className={styles.industry__partners}>
								<SvgIcon className={styles.kfu} name="kfu" />
								<SvgIcon className={styles.agi} name="agi" />
							</div>
						</div>
						<p className={styles.industry__info}>
							Приглашаем присоединиться к уникальной специализированной
							конференции по петрофизике, исследованиям керна, геомеханике,
							интерпретации данных в горизонтальных стволах, сопровождению
							бурения и другим актуальным темам скважинной геофизики.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
