import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <div id="menu">
        <Menu />
      </div>
      <Gallery />
      <Reservations />
      <Contact />
      <footer className="p-10 bg-luxury-black border-t border-luxury-gold/10 text-center text-sm text-gray-500 font-body">
        <p>&copy; {new Date().getFullYear()} TAPAH Restaurant. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
