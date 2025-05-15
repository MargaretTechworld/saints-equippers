import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Sermon from './components/Sermon';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Pastors from './components/Pastors';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermon" element={<Sermon />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pastors" element={<Pastors />} />
      </Routes>
    </div>
  );
}

export default App;
