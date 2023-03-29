/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import AddNewPost from '../../pages/new-post/AddNewPost';

import { ReactComponent as Feed } from '../../../assets/icons/feed.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as NewPost } from '../../../assets/icons/createNewPost.svg';
import { ReactComponent as Direct } from '../../../assets/icons/direct.svg';

import MyIcon from '../../../assets/images/profile.jpg';
import styles from './Footer.module.css';

export default function Footer() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const CreateNewPost = () => {
		setIsModalOpen(() => !isModalOpen);
	};

	return (
		<div className={styles.container}>
			<Link to={'/feed'}>
				<Feed />
			</Link>
			<Link to={'/search'}>
				<Search />
			</Link>
			<NewPost onClick={CreateNewPost} />
			{/* <Link to={'/new-post'}>
			</Link> */}
			{isModalOpen &&
				createPortal(
					<AddNewPost onClicked={CreateNewPost} />,
					document.getElementById('portal')!,
				)}

			<Link to={'/dm'}>
				<Direct />
			</Link>
			<Link to={'/my-page'}>
				<img className={styles.my_icon} src={MyIcon} alt='my icon image' />
			</Link>
		</div>
	);
}
