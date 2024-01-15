// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import MainPage from './components/MainPage/MainPage.tsx';
import HomePage from './components/HomePage/HomePage.tsx';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
)
