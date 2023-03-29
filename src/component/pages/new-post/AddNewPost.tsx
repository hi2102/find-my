import styles from './AddNewPost.module.css';
import { ReactComponent as AddIcon } from '../../../assets/icons/createNewPostImg.svg';
export default function AddNewPost({ onClicked }: any) {
	return (
		<div className={styles.container}>
			<div className={styles.overlay}>
				<button className={styles.button_style} onClick={onClicked}>
					X
				</button>
				<div className={styles.modal}>
					<h1 className={styles.text}>Create new post</h1>
					<div className={styles.upload_wrapper}>
						<AddIcon className={styles.add_icon} />
						<h3 className={styles.add_icon_text}>
							Drag photos and videos here
						</h3>
						<button className={styles.add_icon_button} type='button'>
							Select from computer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
