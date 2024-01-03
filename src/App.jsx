import './App.css';
import About from './components/About';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Journey from './components/Journey';
import Navbar from './components/Navbar';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const scrollRef = useSmoothScroll();

  return (
    <>
      <div className="line__container">
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
      </div>
      <div ref={scrollRef} className="scroll-container">
        <Cursor />
        <Navbar />
        <Home />
        <About />
        <Journey />
      </div>
    </>
  );
}

export default App;
