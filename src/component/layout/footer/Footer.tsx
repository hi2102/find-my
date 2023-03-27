/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';

import { ReactComponent as Feed } from '../../../assets/icons/feed.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as NewPost } from '../../../assets/icons/createNewPost.svg';
import { ReactComponent as Direct } from '../../../assets/icons/direct.svg';
import MyIcon from '../../../assets/images/profile.jpg';

// import MyPage from './MyPage.js';

import styles from './Footer.module.css';


export default function Footer() {
	return (
		<div className={styles.container}>
			<Link to={'/feed'}>
				<Feed />
			</Link>
			<Link to={'/search'}>
				<Search />
			</Link>
			<Link to={'/new-post'}>
				<NewPost />
			</Link>
			<Link to={'/dm'}>
				<Direct />
			</Link>
			<Link to={'/my-page'}>
				<img className={styles.my_icon} src={MyIcon} alt='my icon image' />
			</Link>
		</div>
	);
}
