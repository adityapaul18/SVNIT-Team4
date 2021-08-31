import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'
import './Header.css'
import { useHistory } from 'react-router-dom'

function Header() {
    var user= localStorage.getItem("myuser")
    const history=useHistory()
    const ff = () => {

        if(user===null || user==="")
            history.push('/')
    }

    useEffect(() => {
        ff()
    }, [])

    const logout = () => {
        localStorage.setItem("myuser","")
        user=""
        ff()
    }
    return (
        <div className="Headercont">
            <span className="username">Welcome {user}</span>
            <Button className="logout" variant="contained" onClick = {logout}> logout</Button>
        </div>
    )
}

export default Header
