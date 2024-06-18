import { Login, Register } from './features/auth/components';
import { Dashboard } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
);
}

export default App
