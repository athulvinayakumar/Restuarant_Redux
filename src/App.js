import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResturantView from './pages/ResturantView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/view/:id'} element={<ResturantView/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
