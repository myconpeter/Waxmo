import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import WelcomeLayout from "./layouts/welcomeLayout";


// PAGES
import Welcome from './pages/welcomePage'
import LoginORsignup from "./pages/loginORsignup";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WelcomeLayout />} >
      <Route index element={<Welcome />} />
      <Route path="loginORsignup" element={<LoginORsignup />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />


    </Route>
  )
);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
