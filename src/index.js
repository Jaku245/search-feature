import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import App from './App';
import Home from './Home';
import UserDetail from './UserDetail';

const engine = new Styletron();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StyletronProvider value={engine}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/user-detail' element={<UserDetail />} />
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </StyletronProvider>
);

