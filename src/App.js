import './App.css';
import Chart from './components/Charts/Chart';
import Compinfo from './components/Compinfo/Compinfo';
import Filters from './components/Filters/Filters';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <div>
                            <Filters />
                            <Chart />
                            <Compinfo />
                        </div>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
