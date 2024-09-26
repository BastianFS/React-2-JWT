import './App.css'
import { Route, Routes, Navigate} from 'react-router-dom';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login.jsx';
import Pizza from './pages/Pizza.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';
import CartProvider from './context/CartContext';
import PizzaQtyProvider from './context/PizzaQtyContext';
import PizzaProvider from './context/PizzaContext';
import UserProvider from './context/UserContext.jsx';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.jsx';

function App() {
  return (
    <>
      <PizzaProvider>
      <CartProvider>
      <PizzaQtyProvider> 
      <UserProvider>
      <Routes>
        <Route path='/' element={<Home/>} errorElement={<NotFound/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={<Private><Profile/></Private>}/>
        <Route path='/404' element={<NotFound/>}/>      
      </Routes>
      </UserProvider>
      </PizzaQtyProvider>
      </CartProvider>   
      </PizzaProvider>   
    </>
  );
};

const Private = ({children})=> {
  const {token} = useContext(UserContext);
  return token ? children : <Navigate to= "/login"/>;
}

export default App
