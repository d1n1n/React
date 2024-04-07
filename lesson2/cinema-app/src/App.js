
import './App.css';


import Menu from './components/Menu';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import FamousPic from './components/FamousPic';


import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <header>
        <h2>Леонардо да Вінчі</h2>
        <Menu />
      </header>
      <main>
        
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/famouspic" element={<FamousPic />} />
          
       </Routes>
        
      </main>
    </div>
  );
}

export default App;
