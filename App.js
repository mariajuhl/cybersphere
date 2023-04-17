import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Forside from './pages/Forside';
import Identitetsdesign from './pages/Identitetsdesign';
import Webapplikationer from './pages/Webapplikationer';
import Webudvikling from './pages/Webudvikling';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Forside/>} />
        <Route path="/webudvikling" element={<Webudvikling/>}/>
        <Route path="/identitetsdesign" element={<Identitetsdesign/>}/>  
        <Route path="/webapplikationer" element={<Webapplikationer/>}/> 
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
