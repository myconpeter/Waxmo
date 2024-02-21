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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="loginORsignup" element={<LoginORsignup />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />


      <Route path="/homepage" element={<HomeLayout />}>
        <Route index element={<HomePage />} />

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
