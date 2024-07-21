import AboutUs from "./Components/AboutUs"
import Clients from "./Components/Clients"
import Contact from "./Components/Contact"
import Cursoalstart from "./Components/Cursoalstart"
import Facts from "./Components/Facts"
import Features from "./Components/Features"
import Products from "./Components/Products"
import Service from "./Components/Service"
import Team from "./Components/Team"
import VideoModal from "./Components/VideoModal"

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home