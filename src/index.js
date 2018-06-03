import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './Reducers/RootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './Container/App/App';

// Create redux store and apply middleware
const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

// Render application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
