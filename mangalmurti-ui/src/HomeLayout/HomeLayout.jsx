import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from "../Components/Header";


const HomeLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>

    </>
  )
}

export default HomeLayout