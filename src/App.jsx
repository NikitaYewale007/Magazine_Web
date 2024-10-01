import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Magazines from "./pages/Magazines"
import Testimonials from "./pages/Testimonials"
import Featured from "./pages/Featured"
import About from "./pages/About"
import AppLayout from "./components/layout/AppLayout"
import './App.css'
const App = () => {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children: [
        {
          index: true,  // This sets the Magazines page as the default child for "/"
          element:<Magazines />
        },
        {
          path:"magazines",
          element:<Magazines />
        },
        {
          path:"home",
          element:<Home />
        },
        {
          path:"featured",
          element:<Featured />
        },
        {
          path:"testimonials",
          element:<Testimonials />
        },
        {
          path:"about",
          element:<About />
        }, 
      ],
    },
   ])
  return <RouterProvider router={router}/>
}

export default App