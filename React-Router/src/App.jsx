import About from './About';
import "./App.css"
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Error from "./Error"
function App() {
  return (


    // importing Routing Functionality 

    <BrowserRouter>
    {/* <Header/>                         //  yha pe jo v chiz likhte hai..wo hmesa top pe rahti hai     chahe kisi v component me chle jao..like a navbar */}
    <Routes>                          {/* eske andr hum sare routes likhte hai..jis jis pe v humko jana hai ..without page reloading */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />   {/* agar humara koi page exits nahi krta toh...us case me hum error show krwana chahte ha..toh ase kr sakte hai */}
    </Routes>
    <Footer/>                              {/* yha pe jo v chiz likhte hai..wo hmesa bottom pe rahti hai     chahe kisi v component me chle jao..like a navbar */}
    </BrowserRouter>
  );
}

export default App;
