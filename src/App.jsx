import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import SplashPage from './pages/SplashPage';
import ChooseDentistPage from './pages/ChooseDentistPage';
import ChildrenHomePage from './pages/ChildrenHomePage';
import AdultHomePage from './pages/AdultHomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/choose" element={<ChooseDentistPage />} />
        <Route path="/children" element={<ChildrenHomePage />} />
        <Route path="/adults" element={<AdultHomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
