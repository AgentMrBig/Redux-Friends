import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { setToken } from './token';
import reducer from './reducers';

import LoginForm from './components/LoginForm';
import './styles.css';

const store = createStore(reducer, applyMiddleware(setToken));

function App() {
    return (
        <div className="App">
            <LoginForm />
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);
