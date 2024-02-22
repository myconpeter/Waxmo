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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="loginORsignup" element={<LoginORsignup />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />


      <Route path="home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="me" element={<Me />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="shareinfo" element={<ShareInfo />} />
        <Route path="buyshare" element={<BuyShare />} />
        <Route path="infomation" element={<Information />} />
        <Route path="about" element={<About />} />




      </Route>

    </Route>




  )
);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
