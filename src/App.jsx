import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
// import WelcomeLayout from "./layouts/welcomeLayout";
import HomeLayout from "./layouts/homeLayout";


// PAGES
import Welcome from './pages/welcomePage'
import LoginORsignup from "./pages/loginORsignup";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import HomePage from "./pages/homePage";
import Notifications from "./pages/notifications";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Me from "./pages/me";
import Analysis from "./pages/analysis";
import ShareInfo from "./pages/shareInfo";
import BuyShare from "./pages/buyShare";
import Information from "./pages/information";
import About from "./pages/About";
import Contact from './pages/contact'
import Faq from "./pages/faq";
import UpdateName from "./pages/settings/UpdateName";
import UpdatePassword from "./pages/settings/UpdatePassword";
import UpdateMobileNO from "./pages/settings/UpdateMobileNo";
import UpdateAccountDetails from "./pages/settings/UpdateAcctountDetails";
import RecoverPassword from "./pages/RecoverPassword";
import AdminHome from "./pages/adminPage/AdminHome";
import Single from "./pages/adminPage/notificatons/Single";
import Multiple from "./pages/adminPage/notificatons/Mutiple";
import TotalRegistered from "./pages/adminPage/dataAnalysis/TotalRegistered";
import PayOut from "./pages/adminPage/PayOut";
import AddDaily from "./pages/adminPage/AddDaily";
import ErrorPage from "./pages/ErrorPage";
import TermsAndCondition from "./pages/TermsAndCondition";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="loginORsignup" element={<LoginORsignup />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="recoverpassword" element={<RecoverPassword />} />
      <Route path="termandcondition" element={<TermsAndCondition />} />




      <Route path="home" element={<HomeLayout />}>
        <Route path="homepage" element={<HomePage />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="me" element={<Me />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="shareinfo" element={<ShareInfo />} />
        <Route path="buyshare" element={<BuyShare />} />
        <Route path="infomation" element={<Information />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="updatename" element={<UpdateName />} />
        <Route path="updatepassword" element={<UpdatePassword />} />
        <Route path="updatemobileno" element={<UpdateMobileNO />} />
        <Route path="updateaccountdetails" element={<UpdateAccountDetails />} />

      </Route>

      <Route path="admin" element={<HomeLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="sendsingle" element={<Single />} />
        <Route path="sendall" element={<Multiple />} />
        <Route path="totalusers" element={<TotalRegistered />} />
        <Route path="payout" element={<PayOut />} />
        <Route path="addDaily" element={<AddDaily />} />



      </Route>

      < Route path="*" element={<ErrorPage />} />



    </Route>




  )
);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
