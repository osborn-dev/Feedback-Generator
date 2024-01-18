import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import App from './App';

// 'APP'contents passed into the 'root'
// from the 'div' in the HTML
ReactDom.render(
// for additional checks and warning
<React.StrictMode>
<App />
</React.StrictMode>,
 document.getElementById('root'))  