import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import UserAccountPage from './pages/UserAccountPage';
import LoginPage from './pages/LoginPage';
import MyNFTsPage from './pages/MyNFTsPage';
import MySoldNFTsPage from './pages/MySoldNFTsPage';
import MarketplacePage from './pages/MarketplacePage';
import CreateNFTPage from './pages/CreateNFTPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserAccountPage />} /> {/* Assuming you want UserAccountPage as the home page */}
          <Route path="login" element={<LoginPage />} />
          <Route path="account" element={<UserAccountPage />} />
          <Route path="mynfts" element={<MyNFTsPage />} />
          <Route path="mysoldnfts" element={<MySoldNFTsPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="createnft" element={<CreateNFTPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;