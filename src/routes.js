import { Routes, Route } from 'react-router-dom';
import Buy from './pages/Buy';
import Home from './pages/Home';
import Products from './pages/Products';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}