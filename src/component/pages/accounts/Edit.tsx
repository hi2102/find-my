import { useState } from 'react';
import profileImg from '../../../assets/images/profile.jpg';
import userInfo from '../../../data/profile.json';
import styles from './Edit.module.css';

export default function edit() {
	const getUserInfo = userInfo.profile[0];
	const addSaved = (
		<div
			style={{
				position: 'absolute',
				right: '15%',
				bottom: '-5%',
				fontSize: '20px',
				color: '#03be35',
				backgroundColor: '#fffb00',
				border: '.1875rem solid tomato',
				padding: '.75rem',
				borderRadius: '16px',
				opacity: 1,
			}}>
			profile saved ✅
		</div>
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [saved, setSaved] = useState(false);

	const handleClick = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 2000);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				<profileSaved className='CLASS_profileDefault' />;
			}}>
			<div className={styles.container}>
				<div className={styles.header}>
					<img
						src={profileImg}
						alt='profile'
						width='70'
						height='70'
						style={{ borderRadius: 50 }}
					/>
					<div style={{ textAlign: 'start' }}>
						<div>{getUserInfo.username}</div>
						<span>프로필 사진 바꾸기</span>
					</div>
				</div>
				<div className={styles.name_wrapper}>
					<div>이름</div>
					<div>
						<input type='text' defaultValue={getUserInfo.name} />
						<span>
							사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
							사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
						</span>
						<br />
						<span>이름은 14일 안에 두 번만 변경할 수 있습니다.</span>
					</div>
				</div>
				<div className={styles.username_wrapper}>
					<div>사용자 이름</div>
					<div>
						<input type='text' defaultValue={getUserInfo.username} />
						<span>대부분의 경우 이후 14일 동안 사용자 이름을 다시 </span>
						<span>사용할 아이디로 변경할 수 있습니다.</span>
					</div>
				</div>
				<div className='website_wrapper'>
					<label htmlFor='introduce'>소개</label>
					<div>
						<textarea
							id='introduce'
							maxLength={150}
							cols={40}
							rows={3}
							defaultValue={getUserInfo.bio}
						/>
						<div>
							<span>{getUserInfo.bio.length}</span> <span>/</span>{' '}
							<span>150</span>
						</div>
					</div>
				</div>
				<div className={styles.privacy}>
					<div>개인정보</div>
					<span>
						비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를
						입력하세요. 공개 프로필에는 포함되지 않습니다.
					</span>
				</div>
				<div className={styles.email_wrapper}>
					<label htmlFor='email'>이메일</label>
					<input type='email' id='email' defaultValue={getUserInfo.email} />
				</div>
				<div className={styles.phone_number_wrapper}>
					<label htmlFor='phone_number'>전화번호</label>
					<input
						type='tel'
						id='phone_number'
						defaultValue={getUserInfo.phone_number}
					/>
				</div>
				<div className={styles.gender_wrapper}>
					<label htmlFor='gender'>성별</label>
					<input type='text' id='gender' defaultValue={getUserInfo.gender} />
				</div>
				<div>
					<button onClick={handleClick}>제출</button>
					{saved && addSaved}
				</div>
			</div>
		</form>
		// this is modal
		// <div className={styles.modal_container}>
		// 	<div className={styles.overlay} />
		// 	<div className={styles.modal}>
		// 		<button className={styles.button_style}>X</button>
		// 	</div>
		// </div>
	);
}
