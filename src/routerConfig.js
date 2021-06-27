import Loadable from 'react-loadable';
import Loading from './components/Loading/index';

global.page1 = Loadable({
	loader: () => import('./pages/page1/index'),
	loading: Loading,
});

global.page2 = Loadable({
	loader: () => import('./pages/page2/index'),
	loading: Loading,
});