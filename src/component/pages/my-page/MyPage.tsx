import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';

import jsonDatas from '../../../data/dummy_data.json';

import styles from './MyPage.module.css';
import profileImg from '../../../assets/images/profile.jpg';

// interface IList {
//   content: number;
//   imageUrl: string;
// }
const datas = [...jsonDatas];

function Header() {
	return (
		<>
			<header className={styles.container}>
				<div className={styles.image_container}>
					<div className={styles.image_wrapper}>
						<img className={styles.image} src={profileImg} alt='profile' />
					</div>
				</div>
				<div className={styles.content_container}>
					<div className={styles.content_wrapper}>
						<div className={styles.content}>
							<span className={styles.user_id}>user id</span>
							<button className={styles.content_edit_button}>
								<b>Edit profile</b>
							</button>
							<span>
								<Setting />
							</span>
						</div>
						<div className={styles.content}>
							<div>
								<span>
									<b>26</b>
								</span>{' '}
								<span>posts</span>
							</div>
							<div>
								<span>
									<b>231</b>
								</span>{' '}
								<span>followers</span>
							</div>
							<div>
								<span>
									<b>198</b>
								</span>{' '}
								<span>following</span>
							</div>
						</div>
						<div className={styles.content}>
							<div>user nickname</div>
							<div>user infomation</div>
							<div>
								<b>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</b>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

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
