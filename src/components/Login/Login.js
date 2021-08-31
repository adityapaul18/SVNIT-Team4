import React, { useState } from 'react'
import { Avatar, Button, IconButton, MenuItem, TextField } from '@material-ui/core'
import './Login.css'

function Login() {
    const [set, setset] = useState(1)
    return (
        <div className="LoginContainer">
            <div>
                <img className="LoginImg" src="http://cdn.onlinewebfonts.com/svg/img_63903.png" alt=""/>
            </div>
            <div className="logininfo">
                {
                    set === 1 ?
                    <>
                        <Avatar className="LoginAvatar" />
                        <TextField className="LoginFilters" label="name" variant="outlined" />
                        <TextField className="LoginFilters" label="email" variant="outlined" />
                        <TextField className="LoginFilters" label="password" variant="outlined" />
                        <TextField className="LoginFilters" label="confirm password" variant="outlined" />
                        <Button className="Logupbtn" variant="contained" >Sign up</Button>
                        <div style={{display:"flex",alignItems:"center"}} >Already having an account ? <IconButton><span onClick={() => setset(0)} style={{color:"rgb(0, 106, 255)",cursor:"pointer",fontSize:"15px"}} >sign in</span></IconButton></div>
                    </>
                        :
                    <>
                        <Avatar className="LoginAvatar" />
                        <TextField className="LoginFilters" label="email" variant="outlined" />
                        <TextField className="LoginFilters" label="password" variant="outlined" />
                        <Button className="Loginbtn" variant="contained" >Sign in</Button>
                        <div style={{display:"flex",alignItems:"center"}} >Not having an account ? <IconButton><span onClick={() => setset(1)} style={{color:"rgb(0, 106, 255)",cursor:"pointer",fontSize:"15px"}} >sign up</span></IconButton></div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default Login
