import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './content/Home';
import Blogs from './content/Blogs';
import Contact from './content/Contact';
import BlogContent from './content/BlogContent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <BrowserRouter>
        <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}   />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs/:id" element={<BlogContent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;