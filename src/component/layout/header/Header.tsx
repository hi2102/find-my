import { Link, useLocation } from 'react-router-dom';
// Load
import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as RecommendUser } from '../../../assets/icons/recommend.svg';

import styles from './Header.module.css';
import profiles from '../../../data/profile.json';
import SearchBar from '../../search_bar/SearchBar';

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

function EditHeader() {
	return (
		<div className={styles.edit_header}>
			<Link to='/whenTechMeetsArt'>
				<div style={{ fontSize: '2rem' }}>⬅️</div>
			</Link>
			<b>Edit profile</b>
		</div>
	);
}

function FeedHeader() {
	return (
		<div className={styles.feed_header}>
			<div>This is Logo</div>
			<SearchBar />
		</div>
	);
}

export default function Header() {
	const currentLocation = useLocation();
	console.log(currentLocation.pathname);
	if (currentLocation.pathname === '/feed') {
		return <FeedHeader />;
	} else if (
		currentLocation.pathname === `/${UserName[0].profile[0].username}`
	) {
		return <MyPageHeader />;
	} else if (currentLocation.pathname === '/accounts/edit') {
		return <EditHeader />;
	} else return <header className={styles.container} />;
}
