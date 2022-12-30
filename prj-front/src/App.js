import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import Customer from './components/Customer'
import Salesman from './components/Salesman'
import Retailer from './components/Retailer'
import Admin from './components/Admin'
import Change from './components/Change'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
          
          <Route path="/customer" element={<Customer />} />
          <Route path="/salesman" element={<Salesman />} />
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/change" element={<Change />} />
          <Route path="/logout" element={<h1> Logout Component</h1>} />

          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />

        </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
