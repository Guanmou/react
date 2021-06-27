import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';//卧槽还要引下css
import { Provider } from 'react-redux';//react-redux的api之一

import * as serviceWorker from './serviceWorker';
//导入默认index文件如果名字不是index要写上
import App from './app.js'


ReactDOM.render(
        <App/>
, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
