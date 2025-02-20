
import './App.css';
import About from "./About"
import Contact from "./Contact"
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<About/>}/>
      <Route path='/Contact'element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>
 </>
}

export default App;
