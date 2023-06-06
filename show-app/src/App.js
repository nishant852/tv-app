import './App.css';
import Tvshow from './pages/tvshow';
import {Routes,Route} from 'react-router-dom';
import {Msummary} from './pages/summary'


function App() {
 
  return (
    
    <>
    <Routes>
    <Route path="/" element={<Tvshow/>} />

        <Route path="/show/:sid" element={<Msummary/>} />
    </Routes>

    </>
  );
}

export default App;
