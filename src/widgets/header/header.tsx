import clsx from 'clsx';

import { Logo, SvgIcon } from '@shared/ui';

import styles from './header.module.scss';

interface Props {
	className?: string;
}

export const Header = ({ className }: Props) => {
	return (
		<header className={clsx(styles.header, className)}>
			<div className={styles.header__container}>
				<div className={styles.header__inner}>
					<Logo className={styles.header__logo} />
					<nav className={styles.header__menu}>
						<ul className={styles.list}>
							<li className={styles.list__item}>
								<a className={styles.list__link} href="#">
									О конференции
								</a>
							</li>
							<li className={styles.list__item}>
								<a className={styles.list__link} href="#">
									Направления
								</a>
							</li>
							<li className={styles.list__item}>
								<a className={styles.list__link} href="#">
									Условия участия
								</a>
							</li>
							<li className={styles.list__item}>
								<a className={styles.list__link} href="#">
									Программа
								</a>
							</li>
							<li className={styles.list__item}>
								<a className={styles.list__link} href="#">
									Контакты
								</a>
							</li>
						</ul>
						<div className={styles.social}>
							<a href="#" className={styles.social__link}>
								<SvgIcon name="whatsapp" className={styles.social__icon} />
							</a>
							<a href="#" className={styles.social__link}>
								<SvgIcon name="telegram" className={styles.social__icon} />
							</a>
						</div>
					</nav>
					<a href="#" className={styles.registration}>
						<span className={styles.registration__text}>Регистрация</span>
						<SvgIcon className={styles.registration__icon} name="link" />
					</a>
				</div>
			</div>
		</header>
	);
};
