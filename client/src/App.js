import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Home from './pages/Home'
import Write from './pages/Write'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/post/:id',
        element: <Single />

      },
      {
        path: '/write/',
        element: <Write />

      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);


function App() {
  return (
    <div className="App">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );      
}

export default App;
