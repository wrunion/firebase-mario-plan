import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './layouts/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

//Tutorial here: https://www.youtube.com/watch?v=r5b0spRlnlU&list=PL94kpoa-L28IYDb7Boa4p5KyFuVmvEMfO&index=3