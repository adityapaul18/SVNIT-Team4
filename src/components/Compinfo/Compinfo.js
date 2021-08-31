import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Compinfo.css'

let isInitial = true;
function Compinfo(props) {
    const [showInfo, setShowInfo] =useState(false);
    const [data, setdata] = useState({});
    useEffect(() => {
        if(!isInitial){
            const company = props.info.toLowerCase();
            axios.get('https://cloud.iexapis.com/stable/stock/'+ company +'/company?token=pk_e65e850dee0d47a8b9a8aac91e1fd131')
            .then(function (response) {
                setdata(response.data);
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        setShowInfo(false);
        isInitial = false;
    }, [props.info])
    const clickToggleHandler =() => {
        setShowInfo(true);    
    }
    return (
        <>
            <div  className="moreinfo" >
                <Button variant="contained" className="moreinfoBtn" onClick = {clickToggleHandler}>More info about Company</Button>
            </div>
            {showInfo && (<div className="CompinfoContainer">
            <div className="CompanyI">
                <h2>{data.companyName}</h2>
                <h5>{data.industry}</h5>
                <p>{data.address}, {data.state}, {data.city}, {data.country}</p>
                <p>Ph. No. - {data.phone}</p>
                <p>{data.description}</p>
            </div>
            </div>)}
        </>
    )
}

export default Compinfo
