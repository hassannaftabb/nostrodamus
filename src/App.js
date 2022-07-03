import './App.css';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Feedback from './pages/Feedback/index';
import Profile from './pages/Profile/index';
import PasswordRecovery from './pages/Recovery/index';
import OTP from './pages/OTP/index';
import NewPass from './pages/NewPass/index';
import GetStarted from './pages/GetStarted/index';
import Search from './pages/Search/index';
import Crypto from './pages/Crypto/index';
import Reports from './pages/Reports/index';
import Settings from './pages/Settings/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} /> {/*DONE*/}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/*DONE*/}
          <Route path="/signup" element={<SignUp />} /> {/*DONE*/}
          <Route path="/feedback" element={<Feedback />} /> {/*DONE*/}
          <Route path="/profile" element={<Profile />} /> {/*DONE*/}
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />
          {/*DONE*/}
          <Route path="/otp" element={<OTP />} />
          <Route path="/setnewpassword" element={<NewPass />} /> {/*DONE*/}
          <Route path="/search" element={<Search />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
