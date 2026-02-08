import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Feed from './pages/Feed';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;