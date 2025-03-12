import { SvgIcon } from '@shared/ui';

import styles from './details.module.scss';

export const Details = () => {
	return (
		<section className={styles.details}>
			<div className={styles.content}>
				<h3 className={styles.title}>Узнать подробности</h3>
				<div className={styles.info}>
					<a className={styles.item} href="#">
						<SvgIcon className={styles.item__icon} name="telegram" />
						<p className={styles.item__info}>Абдуллина Элина Айратовна</p>
					</a>
					<a className={styles.item} href="tel:+79520369998">
						<SvgIcon className={styles.item__icon} name="whatsapp" />
						<p className={styles.item__info}>+7 952 036 99 98</p>
					</a>
					<a className={styles.item} href="#">
						<SvgIcon className={styles.item__icon} name="telegram" />
						<p className={styles.item__info}></p>
					</a>
					<a className={styles.item} href="#">
						<SvgIcon className={styles.item__icon} name="telegram" />
						<p className={styles.item__info}></p>
					</a>
				</div>
				<button className={styles.registration}>
					<span className={styles.registration__text}>Пройти регистрацию</span>
					<SvgIcon className={styles.registration__icon} name="plus" />
				</button>
			</div>
		</section>
	);
};
