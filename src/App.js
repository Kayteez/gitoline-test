
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
// import Player from './Players';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Player/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;