<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
// Load 
=======
import { useLocation } from 'react-router-dom';

>>>>>>> 20dfa7c3fa6c985f358d31ca9d8ea183b29e3d85
import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as RecommendUser } from '../../../assets/icons/recommend.svg';

import styles from './Header.module.css';
<<<<<<< HEAD
=======
// import Default from './Defalut';

>>>>>>> 20dfa7c3fa6c985f358d31ca9d8ea183b29e3d85
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

<<<<<<< HEAD
function EditHeader() {
	return <div className={styles.edit_header}>
		<Link to='/whenTechMeetsArt'>
			<div style={{fontSize: '2rem'}}>⬅️</div>
		</Link>
		<b>Edit profile</b>
	</div>
}

function FeedHeader() {
	return <div className={styles.feed_header}>
		<div>This is Logo</div>
		<div>This is Search Bar</div>
	</div>
}

export default function Header() {
	const currentLocation = useLocation();
	console.log(currentLocation.pathname)
	if (currentLocation.pathname === '/feed') {
		return <FeedHeader />;
	} else if (currentLocation.pathname === `/${UserName[0].profile[0].username}`) {
		return <MyPageHeader />;
	} else if (currentLocation.pathname === '/accounts/edit') { 
		return <EditHeader />
=======
export default function Header() {
	const currentLocation = useLocation();
	if (currentLocation.pathname === `/${UserName[0].profile[0].username}`) {
		return <MyPageHeader />;
>>>>>>> 20dfa7c3fa6c985f358d31ca9d8ea183b29e3d85
	} else return <header className={styles.container} />;
}
