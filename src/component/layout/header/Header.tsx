import { useLocation } from 'react-router-dom';

import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as RecommendUser } from '../../../assets/icons/recommend.svg';

import styles from './Header.module.css';
// import Default from './Defalut';

import profiles from '../../../data/profile.json';

const UserName = [{ ...profiles }];

function MyPageHeader() {
	return (
		<header className={styles.container}>
			<Setting />
			<div className={styles.user_wrapper}>
				<div>{UserName[0].profile[0].username}</div>
				<Arrow className={styles.arrow} />
			</div>
			<RecommendUser />
		</header>
	);
}

export default function Header() {
	const currentLocation = useLocation();
	if (currentLocation.pathname === `/${UserName[0].profile[0].username}`) {
		return <MyPageHeader />;
	} else return <header className={styles.container} />;
}
