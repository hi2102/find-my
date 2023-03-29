import styles from './Edit.module.css';
export default function edit() {
	return (
		<div className={styles.modal_container}>
			<div className={styles.overlay} />
			<div className={styles.modal}>
				<button className={styles.button_style}>X</button>
			</div>
		</div>
	);
}
