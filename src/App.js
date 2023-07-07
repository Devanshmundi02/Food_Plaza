import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import MyOrder  from './Screens/MyOrder';
// import Alert from './Components/Alert';
import { useState } from 'react';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CartProvider } from './Components/ContextReducer';

function App() {
  const [alert, setalert] = useState(null)

  // function to show alert message.
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
      <CartProvider>
        <Router>
          {/* <Alert alert={alert} /> */}
          <div>
            <Routes>
              <Route exact path='/' element={<Home showalert={showalert} />} />
              <Route exact path='/login' element={<Login showalert={showalert} />} />
              <Route exact path='/SignUp' element={<SignUp showalert={showalert} />} />
              <Route exact path='/myOrder' element={<MyOrder showalert={showalert} />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
  );
}

export default App;
