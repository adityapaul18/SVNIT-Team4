import './App.css';
import Chart from './components/Charts/Chart';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <div>
        <Filters/>
        <Chart/>
      </div>
    </div>
  );
}

export default App;
