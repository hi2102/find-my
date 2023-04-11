import styles from './AddNewPost.module.css';
import MyIcon from '../../../assets/images/profile.jpg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { useState } from 'react';
// import { ReactComponent as AddIcon } from '../../../assets/icons/createNewPostImg.svg';

export default function AddNewPost({ onClicked }: any) {
	const [accordian, setAccordian]: any = useState({
		0: false,
		1: false,
	});
	const accordianClicked = (id: number) => {
		console.log(accordian[id]);
			setAccordian({
				...accordian,
				[id]: !accordian[id]
			})
	}
	return (
		<div className={styles.container}>
			<div className={styles.overlay} onClick={onClicked} />
			<button className={styles.button_style} onClick={onClicked}>
				X
			</button>
			<div className={styles.modal}>
				<h1 className={styles.text}>Create new post</h1>
					<div className={styles.modal__content}>
						<div>
							<img style={{width: '30px', borderRadius: '50%'}} src={MyIcon} alt="user" />
							<span>{'userId'}</span>
						</div>
						<div>
							<form className={styles.form}>
								<textarea placeholder="문구 입력..."  name="content" id="" cols={60} rows={20}></textarea>
								<div className={styles.addInfo}>
									{/* <div><span>위치 추가</span><Arrow /></div>
									<div><span>접근성</span><Arrow /></div>
									<div><span>고급 설정</span><Arrow /></div> */}
									
									<FormInform>위치 추가</FormInform>
									<FormInform id={0} openAccordian={accordianClicked}>접근성</FormInform>
									{accordian[0] && <span>대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.</span>}
									<FormInform id={1} openAccordian={accordianClicked}>고급 설정</FormInform>
									{accordian[1] && <span>대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.</span>}
								</div>
								<button>작성</button>
							</form>
						</div>
					</div>
			</div>
		</div>
	);
}

function FormInform({id, openAccordian, children} : any){
	return <div onClick={() => openAccordian(id)}>
		<span>{children}</span>
		<Arrow />
	</div>
}