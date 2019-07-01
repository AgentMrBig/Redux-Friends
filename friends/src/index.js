import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { setToken } from './token';
import reducer from './reducers';
import { Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import './styles.css';
import App from './components/App';
localStorage.clear();
const store = createStore(reducer, applyMiddleware(setToken, thunk, logger));

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        } />
)

// function App() {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/public">Public Page</Link>
//                 </li>
//                 <li>
//                     <Link to="/protected">Protected Page</Link>
//                 </li>
//             </ul>
//             <Route path="/public" component={LoginForm} />
//             <Route path="/login" component={LoginForm} />
//             <PrivateRoute path='/protected' component={Friends} />
//         </div>
//     )
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);
