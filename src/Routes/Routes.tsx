import Home from '@/Pages/Home';
import React from 'react';
import {Route, Routes} from 'react-router-native';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default AllRoutes;
