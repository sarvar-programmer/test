import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact/>
      
     
    </>

  )

}
