import { useState } from 'react';
import { createPortal } from 'react-dom';
import './Main.css';
import styles from './Main.module.css';
// import SubmitForm from './SubmitForm';

// 메인화면 클릭 움직이는 기능 추가

export default function Main() {
	const [isSignUpActive, setIsSignUpActive] = useState(false);

	const toggleSignUp = () => {
		setIsSignUpActive(!isSignUpActive);
	};

	const handleSubmitSignIn = (e: { preventDefault: () => void }) => {
		alert('로그인 완료');
		e.preventDefault();
	};
	const handleSubmitSignUp = (e: { preventDefault: () => void }) => {
		alert('회원 가입 완료');
		e.preventDefault();
	};

	return (
		<>
		{createPortal(
		<div className={`container ${isSignUpActive && 'right-panel-active'}`}>
			<div className='form-container sign-in-container'>
				<form onSubmit={handleSubmitSignIn}>
					<h1 className={styles.title}>Sign in</h1>
					<input type='email' placeholder='My Email' />
					<input type='password' placeholder='Enter Password' />
					<input type='password' placeholder='confirm Password' />
					<button>Sign In</button>
				</form>
			</div>
			{/* <SubmitForm
				onSubmit={handleSubmitSignIn} 
				title='Sign In' 
				inputContent={[
						{type: 'email', placeholder:'My Email'},
						{type: 'password', placeholder:'Enter Password'},
						{type: 'password', placeholder:'Confirm Password'},
			]} /> */}
			<div className='form-container sign-up-container'>
				<form onSubmit={handleSubmitSignUp}>
					<h1 className={styles.title}>Create Account</h1>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input type='password' placeholder='confirm Password' />

					<button>Sign Up</button>
				</form>
			</div>
			<div className='overlay-container'>
				<div className='overlay'>
					<div className='overlay-panel overlay-left'>
						<h2 className={styles.sub_title}>Welcome Back!</h2>
						<p className={styles.introduce}>
							To keep connected with us please login with your personal info
						</p>
						<button className='ghost' onClick={toggleSignUp}>
							Sign In
						</button>
					</div>

					<div className='overlay-panel overlay-right'>
						<h2 className={styles.sub_title}>Hello!</h2>
						<p className={styles.introduce}>
							Enter your personal details and start journey with us
						</p>
						<button className='ghost' onClick={toggleSignUp}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>,document.getElementById('portal')!)}
		</>
		
	);
}
