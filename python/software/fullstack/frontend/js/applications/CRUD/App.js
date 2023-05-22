import React, { useMemo } from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';

import Create from './components/Create';
// import Edit from './components/Edit';
import Table from './components/Table'

function App() {
  return (
    <div className='container mx-auto'>
      <Navigation />
      <Routes>
        <Route path='' element={<Table />} />
        <Route path='/create' element={<Create />} />
        {/* <Route path="/edit/:respondentId/" element={<Edit />} /> */}
      </Routes>
    </div>
  );
};

export default App;

