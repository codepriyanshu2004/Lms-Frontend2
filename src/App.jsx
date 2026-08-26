
import { Routes,Route } from 'react-router-dom'
import './App.css'
// import footer from './Components/Footer.jsx'
// import Footer from './Components/Footer.jsx'
// import HomeLayout from './Layouts/HomeLayout.jsx'
import Aboutus from './Pages/AboutUs.jsx'
import HomePage from './Pages/HomePage.jsx'

function App() {
 

  return (
    <>
    
   <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path='/AboutUs' element={<Aboutus/>}> </Route>
   </Routes>
     
   
    </>
   
  )
}

export default App
