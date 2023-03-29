import styles from './Edit.module.css';

export default function edit() {
	return (<form>
		<div className={styles.container}>
			<div className={styles.header}>
				<div>profile image</div>
				<div>
					<div>사용중인 user id</div>
					<span>프로필 사진 바꾸기</span>
				</div>
			</div>
			<div className={styles.name_wrapper}>
				<div>이름</div>
				<div>
					<input type='text' value={'user'} />
					<span>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</span>
					<br />
					<span>이름은 14일 안에 두 번만 변경할 수 있습니다.</span>
				</div>
			</div>
			<div className={styles.username_wrapper}>
				<div>사용자 이름</div>
				<div>
					<input type='text' value={'username'}/>
					<span>대부분의 경우 이후 14일 동안 사용자 이름을 다시 </span>
					<span>사용할 아이디로 변경할 수 있습니다.</span>
				</div>
			</div>
			<div className="website_wrapper">
				<label htmlFor='introduce'>소개</label>
				<div>
					<textarea id='introduce' maxLength={150} cols={40} rows={3} />
					<div>
					<span>0</span>{' '}<span>/</span>{' '}<span>150</span>
					</div>
				</div>
			</div>
			<div className={styles.privacy}>
				<div>개인정보</div>
				<span>비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.</span>
			</div>
			<div className={styles.email_wrapper}>
				<label htmlFor='email'>이메일</label>
				<input type='email' id='email' value={'user-email'}/>
			</div>
			<div className={styles.phone_number_wrapper}>
				<label htmlFor='phone_number'>전화번호</label>
				<input type='tel' id='phone_number' value={'user-phone-number'}/>
			</div>
			<div className={styles.gender_wrapper}>
				<label htmlFor='gender'>성별</label>
				<input type='text' id='gender' value={'gender'}/>
			</div>
			<button>제출</button>
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
