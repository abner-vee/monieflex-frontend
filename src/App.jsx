import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import TransferPage from './pages/TransferPage';
import Login from './components/Login/WebLoginPage';
import OtpScreen from './components/OtpScreen/OtpScreen';
import AccountBalance from './components/transactions/AccountBalance';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyDataPage from './pages/BuyDataPage';
import BuyElctricityPage from './pages/BuyElctricityPage';
import DstvSubPage from './pages/DstvSubPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import AirtimePurchasePage from './pages/AirtimePurchasePage.jsx';
import Dashboard from './pages/DashBoard.jsx';


function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/purchase-data" element={<BuyDataPage />} />
          <Route path="/purchase-airtime" element={<AirtimePurchasePage />} />
          <Route path="/purchase-electricity" element={<BuyElctricityPage />} />
          <Route path="/dstv-subscription" element={<DstvSubPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OtpScreen />} />
          <Route path="/account-balance" element={<AccountBalance />} />
          <Route path="/reset-forgotten-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
