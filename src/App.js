import { Outlet } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import './assets/css/ui.css';

function App() {
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
