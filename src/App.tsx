
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "@/Scenes/Navbar"
import Home from './Scenes/Home/Index';
import Benefits from "@/Scenes/Benefits"
import { SelectedPage } from './Shared/type';
import OurClasses from "@/Scenes/OurClasses";
import ContactUs from "@/Scenes/ContactUs";


function App() {
 
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(() =>{
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);

},[]);
  return (
      <div className='app bg-gray-20'>
          <Navbar  
          isTopOfPage = {isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />

          <Home setSelectedPage={setSelectedPage} />

          <Benefits setSelectedPage={setSelectedPage} />
          <OurClasses setSelectedPage={setSelectedPage}/>
          <ContactUs setSelectedPage={setSelectedPage}/>
     </div>
  )
}

export default App
