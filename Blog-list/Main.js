import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./header"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import NotFound from "./notfound"


export default function BlogComponent(){

    return(
           
        <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        
    )
}