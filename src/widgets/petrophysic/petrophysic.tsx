/* eslint-disable import/no-internal-modules */
import clsx from 'clsx';

// eslint-disable-next-line boundaries/element-types
import { Header } from '@widgets/header';

import { SvgIcon, Timer } from '@shared/ui';

import Parts1Img from '@shared/assets/images/main-part-1.png';
import Parts2Img from '@shared/assets/images/main-part-2.png';
import Parts3Img from '@shared/assets/images/main-part-3.png';
import Parts4Img from '@shared/assets/images/main-part-4.png';
import Parts5Img from '@shared/assets/images/main-part-5.png';
import Parts6Img from '@shared/assets/images/main-part-6.png';
import Parts7Img from '@shared/assets/images/main-part-7.png';
import Parts8Img from '@shared/assets/images/main-part-8.png';
import Parts12Img from '@shared/assets/images/main-part-2.png';
import Parts14Img from '@shared/assets/images/main-part-14.png';
import Parts21Img from '@shared/assets/images/main-part-21.png';
import Parts22Img from '@shared/assets/images/main-part-22.png';
import Parts23Img from '@shared/assets/images/main-part-23.png';
import Share1Img from '@shared/assets/images/main-shape-1.png';
import Share2Img from '@shared/assets/images/main-shape-2.png';
import Share3Img from '@shared/assets/images/main-shape-3.png';

import styles from './petrophysic.module.scss';

export const Petrophysic = () => {
	return (
		<section className={styles.petrophysic}>
			<div className={styles.petrophysic__wrapper}>
				<div className={styles.container}>
					<div className={styles.petrophysic__inner}>
						<Header className={styles.petrophysic__header} />
						<div className={styles.petrophysic__content}>
							<h1 className={styles.petrophysic__title} data-text="ПЕТРОФИЗИКА">
								ПЕТРОФИЗИКА
							</h1>
							<h2 className={styles.petrophysic__subtitle}>XXI</h2>
							<div className={styles.petrophysic__timer}>
								<Timer date={new Date('2025-09-29T23:59:59')} />
							</div>
						</div>
						<footer className={styles.footer}>
							<a className={styles.button} href="#">
								<span className={styles.button__text}>Регистрация</span>
								<SvgIcon className={styles.button__icon} name="plus" />
							</a>
							<div className={styles.program}>
								<p className={styles.program__info}>
									Время использовать свои возможности по максимуму на
									Научно-практической конференции:{' '}
									<span className={styles.hightlight}>30.09-02.10.2025</span>
								</p>
								<a className={styles.program__link} href="#">
									<span>Программа</span>
									<SvgIcon
										className={styles.program__icon}
										name="arrow-right"
									/>
								</a>
							</div>
						</footer>
					</div>
				</div>
				<img
					className={clsx(styles.parts, [styles['shape--1']])}
					src={Share1Img}
				/>
				<img
					className={clsx(styles.parts, [styles['shape--2']])}
					src={Share2Img}
				/>
				<img
					className={clsx(styles.parts, [styles['shape--3']])}
					src={Share3Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--1']])}
					src={Parts1Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--2']])}
					src={Parts2Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--3']])}
					src={Parts3Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--4']])}
					src={Parts4Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--5']])}
					src={Parts5Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--6']])}
					src={Parts6Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--7']])}
					src={Parts7Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--8']])}
					src={Parts8Img}
				/>

				<img
					className={clsx(styles.parts, [styles['parts--12']])}
					src={Parts12Img}
				/>

				<img
					className={clsx(styles.parts, [styles['parts--14']])}
					src={Parts14Img}
				/>

				<img
					className={clsx(styles.parts, [styles['parts--21']])}
					src={Parts21Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--22']])}
					src={Parts22Img}
				/>
				<img
					className={clsx(styles.parts, [styles['parts--23']])}
					src={Parts23Img}
				/>
			</div>
		</section>
	);
};
