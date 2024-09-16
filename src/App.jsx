import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster} from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  
  <div>
  <Navbar />
      <Home />
     <About />
          <Experiance />  
         <PortFolio />  
         <Contact /> 
        <Footer />      
  </div>
  <Toaster />
 
   </>
  )
}

export default App
