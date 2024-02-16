import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './Login';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
