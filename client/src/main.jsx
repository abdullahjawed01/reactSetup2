import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

import App from './App.jsx'

import Specials from './pages/specials.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'

import { CartProvider } from "./components/CartContext.jsx";



// const router = createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//   children:[{path:"",element:<Home/>},{path:"about",element:<About/>},{path:"contact",element:<Contact/>},{path:"github",element:<Github/>}]
// }])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
      
      <Route path='/' element={<App/>}/>
    
      <Route path='specials' element={<Specials/>}/>
       <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}/>
        
        



    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
