import { useState } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Chart from './components/Charts/Chart';
import Compinfo from './components/Compinfo/Compinfo';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
// import { useState } from 'react';

function App() {
    const [chartdata, setchartdata] = useState([])
    const [comp, setComp] =useState("AAPL")
    function company(comp){
        setComp(comp);
        console.log(comp);
    }
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/home">
                        <div>
                            <Filters getCompany={company}/>
                            <Header/>
                            <Filters chartdata={chartdata} setchartdata={setchartdata} />
                            <Chart />
                            <Compinfo info={comp}/>
                        </div>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
