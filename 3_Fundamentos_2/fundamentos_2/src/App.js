import logo from './logo.svg';
import './App.css';


import Paisagem from './assets/img1.jpg'
import Paisgem2 from './assets/img2.jpg'
import MenageData from './components/MenageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Images na public*/}
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem" />
        <img src="/img2.jpg" alt="Paisagem 2"/>
      </div> */}
      {/* Images da Assets */}
      {/* <div>
        <img src={Paisagem} alt="Paisagem" />
        <img src={Paisgem2} alt="Paisagem 2" />
      </div> */}
      <MenageData />

    </div>
  );
}
export default App;
