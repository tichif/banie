import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/gallery' element={<Gallery />} /> */}
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
