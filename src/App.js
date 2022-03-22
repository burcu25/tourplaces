import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Navbar from './components/Navbar';
import veri from "./components/data";
import  "./css/style.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card sehir={veri}/>
      
    </div>
  );
}

export default App;
