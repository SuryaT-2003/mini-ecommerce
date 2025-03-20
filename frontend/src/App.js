import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App d-flex flex-column min-vh-100"> {/* Flexbox layout for full height */}
      <Router>
        <ToastContainer theme='dark' position='top-center' />
        <Header cartItems={cartItems} />
        <main className="flex-fill"> {/* Main content area to push footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        </main>
      </Router>
      <Footer /> {/* Footer remains at the bottom */}
    </div>
  );
}

export default App;
