import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewProductForm from './pages/NewProduct/NewProduct';
import ShowProduct from './pages/ShowProduct/ShowProduct';
import EditProduct from './pages/EditProduct/EditProduct'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/new" element={<NewProductForm />} />
        <Route path="/products/show/:id" element={<ShowProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
