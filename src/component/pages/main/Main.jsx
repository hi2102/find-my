import { useState } from 'react';
import './Main.css';
import styles from './Main.module.css';

// interface ISubmit {
// 	preventDefault(): React.FormEvent<HTMLInputElement>;
// 	onSubmit: (form: { name: string, description: string }) => void;
// }

// 요기부터
// const guaTalk = document.querySelector('.guaTalk_body');

// let lastX = 0,
// 	lastY = 0,
// 	startX = 0,
// 	startY = 0;

// function onRemoveEvent() {
// 	guaTalk.classList.remove('active');
// 	document.removeEventListener('mouseup', onRemoveEvent);
// 	document.removeEventListener('mousemove', onMove);
// }

// function onMove(e) {
// 	const screenContainer = document.querySelector('.mainScreenContainer');

// 	e.preventDefault();
// 	lastX = startX - e.clientX;
// 	lastY = startY - e.clientY;

// 	startX = e.clientX;
// 	startY = e.clientY;

// 	screenContainer.style.top = `${screenContainer.offsetTop - lastY}px`;
// 	screenContainer.style.left = `${screenContainer.offsetLeft - lastX}px`;
// }

// guaTalk.addEventListener('mousedown', function (e) {
// 	startX = e.clientX;
// 	startY = e.clientY;
// 	guaTalk.classList.add('active');
// 	document.addEventListener('mouseup', onRemoveEvent);
// 	document.addEventListener('mousemove', onMove);
// });

// 요긔까지

export default function Main() {
	const [isSignUpActive, setIsSignUpActive] = useState(false);
	// const [coordinate, setCoordnate] = useState({
	// 	x: 0,
	// 	y: 0,
	// });

	const toggleSignUp = () => {
		setIsSignUpActive(!isSignUpActive);
	};

	const handleSubmitSignIn = (e) => {
		alert('로그인 완료');
		e.preventDefault();
	};
	const handleSubmitSignUp = (e) => {
		alert('회원 가입 완료');
		e.preventDefault();
	};

	return (
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
		</div>
	);
}
