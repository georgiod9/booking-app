import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>

        <Routes>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>

        <Routes>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
