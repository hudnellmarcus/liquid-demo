import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NoMatch from './Pages/NoMatch';
import SignIn from './Pages/SignIn';
import SignInPage from './Pages/SignIn';
import Header from './Components/Header';
import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register/1" element={<Register1 />} />
        <Route path="/register/2" element={<Register2 />} />
        <Route path="/referral" element={<LandingPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
