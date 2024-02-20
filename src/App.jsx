import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



// PAGES
import Welcome from './pages/welcomePage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Welcome />} />

    </Route>
  )
);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
