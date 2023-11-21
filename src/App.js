import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NoMatch from './Pages/NoMatch';
//import SignIn from './Pages/SignIn';
import SignInPage from './Pages/SignIn';
import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';
import Homepage from './Pages/Homepage';
import OfferGallery from './Pages/OfferGallery';
import RedeemedRewards from './Pages/RedeemedRewards';
import 'react-slick';
import 'slick-carousel';
import Perks from './Pages/Perks';
import AccountSettings from './Pages/AccountSettings';
import Modal1 from './Components/Modals/Modal1';
import Modals from './Components/Modals/Modals';


function App() {
  return (
    <Router basename="/liquid-demo">
      <Routes>
        <Route path='/modal' element={<Modals />} />
        <Route path='/settings' element={<AccountSettings />} />
        <Route path='/perks' element={<Perks />} />
        <Route path='/offers' element={<OfferGallery />} />
        <Route path='/rewards' element={<RedeemedRewards />} />
        <Route path='/homepage' element={<Homepage />} />
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
