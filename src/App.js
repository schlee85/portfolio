import { Outlet, useLocation } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import './assets/css/ui.css';
import { useEffect } from 'react';

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<>
			<LayoutHeader />
			<main className="contents">
				<Outlet />
			</main>
			<LayoutFooter />
		</>
	);
}

export default App;
