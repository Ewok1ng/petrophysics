import styles from './expert.module.scss';

interface Props {
	icon: string;
	name: string;
	position: string;
	text: string[];
}

export const Expert = ({ icon, name, position, text }: Props) => {
	return (
		<div className={styles.expert}>
			<div className={styles.expert__header}>
				<div className={styles.avatar}>
					<img className={styles.avatar__image} src={icon} alt="" />
				</div>
				<div className={styles.expert__info}>
					<h4 className={styles.expert__name}>{name}</h4>
					<p className={styles.expert__position}>{position}</p>
				</div>
			</div>
			<div className={styles.expert__content}>
				{text.map((item, index) => (
					<p key={index} className={styles.text}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};
