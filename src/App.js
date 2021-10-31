import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import About from './About/About'


import Dashboard from './Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header/Header'
import Home from './Home/Home'
import Login from './Login/Login'
import Service from './Service/Service'
import Authporvider from './Context/Authporvider';





// import google auth 
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Footer/Footer';
import Manageorder from './Manageorder/Manageorder';
import Blog from './Blog/Blog';





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
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <PrivateRoute path='/service/:id'>
                  <Service></Service>
                </PrivateRoute>
                
                <Route path='/myorder'>
                <About></About>
                </Route>
                <Route path='/orders'>
                  <Manageorder></Manageorder>
                </Route>
                
                
                <Route path='/dashboard'>
                  <Dashboard></Dashboard>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                

              </Switch>
              <Footer></Footer>
          </Router>
        </Authporvider>
    </div>
  )
}

export default App
