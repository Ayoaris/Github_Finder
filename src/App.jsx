import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound"; 

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notFound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
         </Routes>
        </main>
        <Footer />
       </div>
    </Router>
  );
}
 
export default App;
