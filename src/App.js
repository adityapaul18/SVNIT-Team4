import './App.css';
import Chart from './components/Charts/Chart';
import Compinfo from './components/Compinfo/Compinfo';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <div>
        <Filters/>
        <Chart/>
        <Compinfo/>
      </div>
    </div>
  );
}

export default App;
