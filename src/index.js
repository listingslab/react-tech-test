/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './style/mui/themes/purple_green';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import packageJSON from '../package.json';
import './style/index.css';

console.log (`${ packageJSON.name } ${ packageJSON.version }`);

const store = configureStore();
const persistor = persistStore(store);
const theme = createMuiTheme( muiTheme );

ReactDOM.render(
	<Provider store={store}>
    	<PersistGate
	        loading={null}
	        persistor={persistor}>
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</BrowserRouter>
		</PersistGate>
    </Provider>,
	document.getElementById('root')
);

registerServiceWorker();
