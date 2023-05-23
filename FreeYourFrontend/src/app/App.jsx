import Inicio from './components/content/inicio/Inicio'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Admin from './components/content/admin/Admin'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from './components/content/Error404/Error404'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
      <Navbar />
      <Inicio />
      <Footer />
      </>,
      errorElement: <>
      <Navbar />
      <Error404 />
      <Footer />
      </>
    },
    {
      path: "/home",
      element:<>
      <Navbar />
      <Inicio />
      <Footer />
      </>
    },
    {
      path: "/inicio",
      element:<>
      <Navbar />
      <Inicio />
      <Footer />
      </>
    },
    {
      path: "/admin",
      element: <>
      <Navbar />
      <Admin />
      <Footer />
      </>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App