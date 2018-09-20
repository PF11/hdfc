import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes'
import Login from './pages/Login';
import 'antd/dist/antd.css';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
