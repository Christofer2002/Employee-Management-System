import { Login, Register } from './components/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
);
}

export default App
