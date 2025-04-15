import Header from "./Components/Header/Header"
import Services from "./Components/Services/Services"
import About from "./Components/About/About"
import Qualities from "./Components/Qualities/Qualities"
import Features from "./Components/Features/Features"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

import resizeHandler from "./assets/resizeHandler/resizeHandler"

function App() {
    resizeHandler();
    return (
        <div className="App">
            <Header/>
            <Services/>
            <About/>
            <Qualities/>
            <Features/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App