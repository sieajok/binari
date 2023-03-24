import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './home/home';
import Home2 from './home2/home2';
import Home3 from './home3/home3';
import Home4 from './home4/home4';
import Home5 from './home5/home5';
import Home6 from './home6/home6';
import Kontakdata from './home6/admin';
import Laystarup from './home3/laystarup';
import Laystarup1 from './home3/laystarup1'
import Laystarup2 from './home3/laystarup2';
import Laystarup3 from './home3/laystarup3';
import Laystarup4 from './home3/laystarup4';
import Laystarup5 from './home3/laystarup5';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tentang' element={<Home2/>}/>
        <Route path='/layanan' element={<Home3/>}/>
        <Route path='/stratup' element={<Home4/>}/>
        <Route path='/acara' element={<Home5/>}/>
        <Route path='/contac' element={<Home6/>}/>
        <Route path='/admin' element={<Kontakdata/>}/>
        <Route path='/laystarup' element={<Laystarup/>}/>
        <Route path='/laystarup1' element={<Laystarup1/>}/>
        <Route path='/Laystarup2' element={<Laystarup2/>}/>
        <Route path='/Laystarup3' element={<Laystarup3/>}/>
        <Route path='/Laystarup4' element={<Laystarup4/>}/>
        <Route path='/Laystarup5' element={<Laystarup5/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
