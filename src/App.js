import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Createprogram from './pages/Createprogram';
import Updateprogram from './pages/Updateprogram';
import Viewprogram from './pages/Viewprogram'
import ProgramsList from './pages/ProgramsList';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import Removeprogram from './pages/Removeprogram';

function App() {
  return (
    <>
      <Router>
     
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ProgramsList' exact component={ProgramsList} />
          <Route path='/add-program/trainingId' component={Createprogram} />
          <Route path='/Viewprogram' component={Viewprogram} />
          <Route path="view-program/:trainingId" component={Viewprogram}/>

        </Switch>
        <ProgramsList />
        
      
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;