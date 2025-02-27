
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Donate from './pages/Donate/Donate'
import AboutUs from './pages/AboutUs/AboutUs'
import GetInvolved from './pages/GetInvolved/GetInvolved'
import Blog from './pages/Blog/Blog'
import ContactUs from './pages/ContactUs/ContactUs'
import Payment from './pages/Payment/Payment'
import Success from './pages/Success/Success'

function App() {

  return (
    <div className='Appbody'>
      <HashRouter>
        <Routes>

          <Route path='/payment' element={<Payment />} />
          <Route path='/success' element={<Success/>} />
          <Route path='/' element={<Home />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
