/* eslint-disable react/no-unknown-property */

import AboutUs from "./AboutUs"
import Clients from "./Components/Clients"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Products from "./Components/Products"
import Service from "./Components/Service"
import Team from "./Components/Team"
import VideoModal from "./Components/VideoModal"

import Cursoalstart from "./Cursoalstart"
import Facts from "./Facts"
import Header from "./Header"

// import '../css/style.css';

function App() {

  return (
    <>


      <Header></Header>
      <Cursoalstart></Cursoalstart>
      <AboutUs></AboutUs>
      <Facts></Facts>
      <Features></Features>
      <VideoModal></VideoModal>
      <Service></Service>
      <Products></Products>
      <Team></Team>
      <Clients></Clients>

      <Contact></Contact>
      <Footer></Footer>



    </>
  )
}

export default App
