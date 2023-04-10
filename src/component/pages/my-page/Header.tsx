import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// Load JSON Datas
import userDatas from '../../../data/fake_user.json';
import profiles from '../../../data/profile.json';
// Load Styles(Icon, image, css)
import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';
import profileImg from '../../../assets/images/profile.jpg';
import styles from './MyPage.module.css';

interface IUser {
	id: number;
	posts: number;
	followers: number;
	following: number;
}

const user: IUser[] = [...userDatas];
const getProfile = [{ ...profiles }];

function PostAndFollow({ id, posts, followers, following }: IUser) {
	return (
		<Fragment key={id}>
			<div className={styles.post_font_size}>
				<b>{posts}</b> posts
			</div>
			<div className={styles.post_font_size}>
				<b>{followers}</b> followers
			</div>
			<div className={styles.post_font_size}>
				<b>{following}</b> following
			</div>
		</Fragment>
	);
}

<<<<<<< HEAD
function EditButton() {
	return <Link to='/accounts/edit'>
		<button className={styles.content_edit_button} >
			<b>Edit profile</b>
		</button>
	</Link>
}

=======
>>>>>>> 20dfa7c3fa6c985f358d31ca9d8ea183b29e3d85
export default function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.image_container}>
				<div className={styles.image_wrapper}>
					<img className={styles.image} src={profileImg} alt='profile' />
				</div>
			</div>
			<div className={styles.content_container}>
				<div className={styles.content_wrapper}>
					<div className={styles.content}>
						<span className={styles.user_id}>
							{getProfile[0].profile[0].username}
						</span>
<<<<<<< HEAD
						<EditButton />
=======
						<Link to='/accounts/edit'>
							<button className={styles.content_edit_button}>
								<b>Edit profile</b>
							</button>
						</Link>
>>>>>>> 20dfa7c3fa6c985f358d31ca9d8ea183b29e3d85
						<span>
							<Setting />
						</span>
					</div>
					<div className={styles.content}>
						<PostAndFollow
							id={user[0].id}
							posts={user[0].posts}
							followers={user[0].followers}
							following={user[0].following}
						/>
					</div>
					<div className={styles.content}>
						<div>{getProfile[0].profile[0].name}</div>
						<div>{getProfile[0].profile[0].bio}</div>
						<div>
							<a
								href={getProfile[0].profile[0].website}
								target='_blank'
								rel='noreferrer'>
								{getProfile[0].profile[0].website}
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
