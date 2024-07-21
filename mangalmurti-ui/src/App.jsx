/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */

import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Cursoalstart from './Components/Cursoalstart';
import Facts from './Components/Facts';
import Features from './Components/Features';
import Team from './Components/Team';
import VideoModal from './Components/VideoModal';
import Home from "./Home";
import HomeLayout from "./HomeLayout/HomeLayout";
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import NotFound from './Pages/NotFound';
import ProductsPage from './Pages/ProductsPage';
import ServicePage from './Pages/ServicePage';
// import '../css/style.css';

function App() {


  useEffect(() => {
    console.log($); // Check if $ is jQuery
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  }, []);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<AboutPage></AboutPage>} />
              <Route path='/contact' element={<Contact></Contact>} />
              <Route path='/clients' element={<Clients></Clients>} />
              <Route path='/Cursoalstart' element={<Cursoalstart></Cursoalstart>} />
              <Route path='/Facts' element={<Facts></Facts>} />
              <Route path='/feature' element={<Features></Features>} />
              <Route path='/products' element={<ProductsPage></ProductsPage>} />
              <Route path='/service' element={<ServicePage></ServicePage>} />
              <Route path='/team' element={<Team></Team>} />
              <Route path='/vediomodal' element={<VideoModal></VideoModal>} />
              <Route path='/blog' element={<BlogPage></BlogPage>} />

              <Route path='/*' element={<NotFound></NotFound>} />
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
