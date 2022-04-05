import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './component/TodoList';

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
  document.getElementById('root')
);


