
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
// import Player from './Players';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Detail from "./Detail";
import Players from "./Players";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Players />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;