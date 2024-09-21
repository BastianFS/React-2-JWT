import './App.css'
import { Route, Routes } from 'react-router';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login.jsx';
import Pizza from './pages/Pizza.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import CartProvider from './context/CartContext';
import PizzaQtyProvider from './context/PizzaQtyContext';
import PizzaProvider from './context/PizzaContext';

function App() {

  return (
    <>
      <PizzaProvider>
      <CartProvider>
      <PizzaQtyProvider> 
      <Routes>
        <Route path='/' element={<Home/>} errorElement={<NotFound/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/404' element={<NotFound/>}/>      
      </Routes>
      </PizzaQtyProvider>
      </CartProvider>   
      </PizzaProvider>   
    </>
  );
};

export default App
