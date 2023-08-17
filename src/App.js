import Home from './Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameDetail from './components/Game_list_detail';
function App() {
  return (
    <div className="App">
     
     <Router>
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<GameDetail />} />

          </Routes>          
        
        <Footer />
      </Router>


        {/* <Navbar/>
        <Home/>
        <Footer/> */}
      
    </div>
  );
}

export default App;
