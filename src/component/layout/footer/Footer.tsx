/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import AddNewPost from '../../pages/new-post/AddNewPost';
// Load icons & styles
import { ReactComponent as Feed } from '../../../assets/icons/feed.svg';
import { ReactComponent as NewPost } from '../../../assets/icons/createNewPost.svg';
import { ReactComponent as Direct } from '../../../assets/icons/direct.svg';
import MyIcon from '../../../assets/images/profile.jpg';
import styles from './Footer.module.css';
// Load Json file
import profiles from '../../../data/profile.json';

export default function Footer() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const CreateNewPost = () => {
		setIsModalOpen(() => !isModalOpen);
	};
	const user = [{ ...profiles }];
	return (
		<div className={styles.container}>
			<Link to={'/feed'}>
				<Feed />
			</Link>
			<NewPost onClick={CreateNewPost} />
			{isModalOpen &&
				createPortal(
					<AddNewPost onClicked={CreateNewPost} />,
					document.getElementById('portal')!,
				)}
			<Link to={'/dm'}>
				<Direct />
			</Link>
			<Link to={`${user[0].profile[0].username}`}>
				<img className={styles.my_icon} src={MyIcon} alt='my icon image' />
			</Link>
		</div>
	);
}
