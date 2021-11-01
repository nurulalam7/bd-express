import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
// import About from './About/About'


// import Dashboard from './Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header/Header'

import Login from './Login/Login'
import Service from './Service/Service'
import Authporvider from './Context/Authporvider';





// import google auth 
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Footer/Footer';

import Blog from './Blog/Blog';
import Update from './Components/Update/Update';
import Dashboard from './Home/Dashboard/Dashboard';

import About from './Components/About/About';
import Homeinformation from './Components/Homeinformation/Homeinformation';
import Myorder from './Myorder/Myorder';






// authentication call 




function App() {
  return (
    <div> 
        
        <Authporvider>
        <Router>
              <Header></Header>
              
             
              
              <Switch>
                <PrivateRoute path='/blog'>
                  <Blog></Blog>
                </PrivateRoute>
                <Route exact path='/'>
                <Homeinformation></Homeinformation>
                </Route>
                <Route path='/home'>
                  <Homeinformation></Homeinformation>
                </Route>
                <PrivateRoute path='/service/:id'>
                  <Service></Service>
                </PrivateRoute>
                
                {/* <Route path='/myorder'>
                   <About></About>
                </Route> */}
                {/* <Route path='/orders'>
                  <Manageorder></Manageorder>
                </Route> */}
                
                
                <Route path='/dashboard'>
                  <Dashboard></Dashboard>
                </Route>
                <Route path='/orders/update/:id'>
                  <Update></Update>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                
                <Route path='/myorder'>
                 <Myorder></Myorder>
                </Route>
                

              </Switch>
             
              <Footer></Footer>
          </Router>
        </Authporvider>
    </div>
  )
}

export default App
