import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 461efec73fa929c416924450ad1ac06ce11d065a
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';

const App = () => {
  return (
    <Router>
    	<div className="App">
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" render={() => <DeptInfo/>} exact />
          <Route path="/directors" render={() => <Directors/>} exact/>
          <Route path="/" render={(prop) => <Index {...prop}/>} exact/>          
      	</div>
    </Router>
  ) 
}
export default App;
