import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LoginPage from './pages/login';
import ProtectedRoute from './pages/ProtectedPage';
import ProtectedPage from './pages/ProtectedPage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/protected" element={<ProtectedRoute />}>
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
