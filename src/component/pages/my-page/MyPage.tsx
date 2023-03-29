import jsonDatas from '../../../data/dummy_data.json';

import styles from './MyPage.module.css';
import Header from './Header';

const datas = [...jsonDatas];

function Contents() {
	return (
		<>
			<hr className={styles.border_color} />
			<ul className={styles.posted_content}>
				<li className={styles.dummy_content}>
					<img
						className={styles.load_content_img}
						src={datas[0].imageUrl}
						alt='img'
					/>
				</li>
			</ul>
		</>
	);
}

export default function MyPage() {
	return (
		<>
			<Header />
			<Contents />
		</>
	);
}
