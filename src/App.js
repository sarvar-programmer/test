import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import Rahbariat from "./components/rahbariat/Rahbariat";
import AKM from "./components/akm/AKM";
import News from "./components/news/News";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/news" element={<News />} /> */}
        {/* <Route path="/books" element={<Books />} /> */}
        {/* <Route path="/akm" element={<AKM />} /> */}
        {/* <Route path="/rahbariat" element={<Rahbariat />} /> */}
      </Routes>
      <Contact/>
      {/* <Footer/> */}
     
    </>

  )

}
