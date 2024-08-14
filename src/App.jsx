import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
      <Navbar/>
      {/*<Home/>*/}
      <Register/>
      <Login/>
      <Footer/>
    </>
  );
};

export default App
