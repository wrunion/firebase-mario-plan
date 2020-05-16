import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './layouts/NavBar';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Tutorial here: https://www.youtube.com/watch?v=r5b0spRlnlU&list=PL94kpoa-L28IYDb7Boa4p5KyFuVmvEMfO&index=3