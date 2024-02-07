import { Outlet, useLocation } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import './assets/scss/ui.scss';

function App() {
	const { pathname } = useLocation();

	return (
		<>
			<LayoutHeader />
			<main className={`contents ${pathname === '/' ? 'full' : ''}`}>
				<Outlet />
			</main>
			<LayoutFooter />
		</>
	);
}

export default App;
