import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import UserLogIn from './components/UserLogIn';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Product from './components/Product'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<HomePage/>} exact></Route>
          <Route path="/login/" element = {<UserLogIn/>}></Route>
          <Route path="/register/" element = {<Register/>}></Route>
          <Route path="/product/:id" element = {<Product/>}></Route>
          <Route path="/profile/" element = {<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
