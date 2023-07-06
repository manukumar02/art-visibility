import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ArtistsScreen from './screens/ArtistsScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PaintingsScreen from './screens/PaintingsScreen';
import ContactusScreen from './screens/ContactusScreen';
import AboutusScreen from './screens/AboutusScreen';

type Props = {};

const Navigations: React.FC<Props> = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/paintings' element={<PaintingsScreen />} />
      <Route path='/artists' element={<ArtistsScreen />} />
      <Route path='/about-us' element={<AboutusScreen />} />
      <Route path='/contact-us' element={<ContactusScreen />} />
      <Route path='/404' element={<NotFoundScreen />} />
      <Route path='*' element={<Navigate replace to='/404' />} />
    </Routes>
  );
};

export default Navigations;
