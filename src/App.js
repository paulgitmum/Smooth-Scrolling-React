
import "./App.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Contacts/>
    </div>
  );
}

export default App;
