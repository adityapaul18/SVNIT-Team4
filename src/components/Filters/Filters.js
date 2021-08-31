import React, { useEffect, useState } from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import './Filters.css';
import moment from 'moment';
import axios from 'axios';

function Filters(props) {
    const [comp, setcomp] = useState("")
    var date = new Date();
    const [fromdate, setfromdate] = useState(new Date(new Date(date.getFullYear(), date.getMonth(), 1)))
    const [todate, settodate] = useState(new Date())
    const [histname, sethistname] = useState("")

    const [symbols,setSymbols] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:5000/')
            .then((res) => {
                console.log(res.data);
                setSymbols(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const ftch = () => {
        var dateto = moment(todate).format('YYYY-MM-DD');
        var datefr = moment(fromdate).format('YYYY-MM-DD');
        const data = {
            key: comp,
            startDate: datefr,
            endDate: dateto
        }
        console.log(data)
        axios.post('http://localhost:5000/data', data)
            .then((res) => {
                console.log(res);
                props.setchartdata(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="filterContainer" >
            <div>
                <Autocomplete
                id="combo-box-demo"
                options={symbols}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search Stocks" variant="outlined" onBlur ={(e) => {props.getCompany(e.target.value)}}/>}
                />
                <TextField value={comp} onChange={(e) => { setcomp(e.target.value); props.getCompany(e.target.value) }} className="Filters" select variant="outlined" label="Company">
                    <MenuItem key="AMZN" value="AMZN">AMZN</MenuItem>
                    <MenuItem key="TSLA" value="TSLA">TSLA</MenuItem>
                    <MenuItem key="WMT" value="WMT">WMT</MenuItem>
                    <MenuItem key="BAC" value="BAC">BAC</MenuItem>
                    <MenuItem key="MA" value="MA">MA</MenuItem>
                    <MenuItem key="PG" value="PG">PG</MenuItem>
                </TextField>
                from <TextField value={fromdate} onChange={(e) => { setfromdate(e.target.value) }} className="Filters" type="date" variant="outlined" />
                to <TextField value={todate} onChange={(e) => { settodate(e.target.value) }} className="Filters" type="date" variant="outlined" />
                <Button className="moreinfoBtn" variant="contained" onClick={() => ftch()} >Filter</Button>
            </div>
            <div><TextField value={histname} onChange={(e) => { sethistname(e.target.value) }} className="Filters" select variant="outlined" label="History">
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
            </TextField></div>
        </div>
    )
}

export default Filters
