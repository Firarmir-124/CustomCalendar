import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<h1>Сайт</h1>} path="/" />
    </Routes>
  );
};

export default App;
