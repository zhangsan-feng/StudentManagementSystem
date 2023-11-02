import React from 'react';
import ReactDOM from 'react-dom/client';
import HttpRouter from './route'
import {RouterProvider} from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';
import 'antd/dist/reset.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={HttpRouter}/>
);
