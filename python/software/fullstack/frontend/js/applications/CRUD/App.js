import React, { useMemo } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
    var titleMain = `Full Stack CRUD`;
  return (
    <div className='p-8'>
        <a href='/' className="text-5xl font-bold">{titleMain}</a>
      {/* <Routes>
        <Route path="/" element={...} />
      </Routes> */}
    </div>
  );
};

export default App;