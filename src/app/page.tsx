'use client'

import React from 'react';
import Header from './components/Header';
import PasteSection from './components/PasteSection';
import RecentPastes from './components/RecentPastes';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div className='wrap'>
      <Header />
      <main>
        <PasteSection />
        <RecentPastes />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
