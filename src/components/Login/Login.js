import React, { useEffect, useState } from 'react'
import { Avatar, Button, IconButton, MenuItem, TextField } from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../../Firebase.js'
import { useHistory } from 'react-router-dom'

function Login() {
    var user= localStorage.getItem("myuser")

    const history=useHistory()
    const ff = () => {

        if(user)
            history.push('/home')
    }

    useEffect(() => {
        ff()
    }, [])
    const signin2 = () => {
        auth.signInWithEmailAndPassword(mail,password).then((userAuth) => {
            localStorage.setItem("myuser" , userAuth.user.displayName) 
            history.push('/home')
        }).catch((err) => alert("password and mail do not match"))

        setpassword("")
    }
    
    const signup = async () => {
        if(!name || mail==="" || password==="" || !/\S/.test(name)|| !/\S/.test(mail)|| !/\S/.test(password)){
            alert("plz fill up all the fields")
            return;
        }
        if(passwordc !== password ){
            alert("both passwords should match")
            return;
        }
            
        await auth.createUserWithEmailAndPassword(mail,password).then((userAuth) => {
            userAuth.user
              .updateProfile({
                displayName: name,
            })
                localStorage.setItem("myuser" , name) 
                history.push('/home')
                

        }).catch((err) => {
                var errMessage = err.message;
                alert(errMessage)
            setname("")
            setmail("")
            setpassword("")
            setpasswordc("")
            }
            )

        console.log(name)
        console.log(mail)
        console.log(profilepic)
        console.log(password)
    }
    const [mail, setmail] = useState("")
    const [name, setname] = useState("")
    const [profilepic, setprofilepic] = useState("")
    const [password, setpassword] = useState("")
    const [passwordc, setpasswordc] = useState("")
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
                        <TextField value={name} onChange={(e) => setname(e.target.value)} className="LoginFilters" label="name" variant="outlined" />
                        <TextField value={mail} onChange={(e) => setmail(e.target.value)} className="LoginFilters" label="email" variant="outlined" />
                        <TextField value={password} type="password" onChange={(e) => setpassword(e.target.value)} className="LoginFilters" label="password" variant="outlined" />
                        <TextField value={passwordc} type="password" onChange={(e) => setpasswordc(e.target.value)}className="LoginFilters" label="confirm password" variant="outlined" />
                        <Button className="Logupbtn" variant="contained" onClick={signup}>Sign up</Button>
                        <div style={{display:"flex",alignItems:"center"}} >Already having an account ? <IconButton><span onClick={() => setset(0)} style={{color:"rgb(0, 106, 255)",cursor:"pointer",fontSize:"15px"}} >sign in</span></IconButton></div>
                    </>
                        :
                    <>
                        <Avatar className="LoginAvatar" />
                        <TextField value={mail} onChange={(e) => setmail(e.target.value)} className="LoginFilters" label="email" variant="outlined" />
                        <TextField  value={password} type="password" onChange={(e) => setpassword(e.target.value)} className="LoginFilters" label="password" variant="outlined" />
                        <Button className="Loginbtn" variant="contained" onClick={signin2}>Sign in</Button>
                        <div style={{display:"flex",alignItems:"center"}} >Not having an account ? <IconButton><span onClick={() => setset(1)} style={{color:"rgb(0, 106, 255)",cursor:"pointer",fontSize:"15px"}} >sign up</span></IconButton></div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default Login
