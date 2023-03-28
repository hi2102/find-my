import Layout from './component/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from './routes/RoutePage';

import Main from './component/pages/main/Main';

function FirstPage({ isLogin }) {
	return (
		<>
			{isLogin ? (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100vh',
					}}>
					<Main />
				</div>
			) : (
				<BrowserRouter>
					<Layout>
						<RoutePage />
					</Layout>
				</BrowserRouter>
			)}
		</>
	);
}

export default function App() {
	return <FirstPage isLogin={true} />;
}