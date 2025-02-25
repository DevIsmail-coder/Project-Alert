
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Donate from './pages/Donate/Donate'
import AboutUs from './pages/AboutUs/AboutUs'
import GetInvolved from './pages/GetInvolved/GetInvolved'
import Blog from './pages/Blog/Blog'
import ContactUs from './pages/ContactUs/ContactUs'
import Filter from './pages/Filter/Filter'
// import Header from './pages/Header/Header'

function App() {

  return (
    <div className='Appbody'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Filter />} />
          <Route path='/log' element={<Home />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
