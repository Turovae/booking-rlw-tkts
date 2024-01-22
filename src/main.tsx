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

// eslint-disable-next-line react-refresh/only-export-components
const BASENAME = import.meta.env.VITE_PUBLIC_BASENAME || '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASENAME}>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
)
