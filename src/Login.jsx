import { Link } from "react-router-dom"
import logo from "./images/logo.png"
import { useState } from "react"
import axios from "axios"
import API from "./Config/Api"

function Login({setIsLogin}) {
    const [form,setform] = useState({
        email:"",
        password:""
    })

    const eventHender =(e) =>{
        setform(preState=>({...preState,[e.target.name]:e.target.value}))
    }

    const submitHander =(e) =>{
        e.preventDefault()
        axios.post(`${API.BASE_URL}login`,form,{headers:{
            "Content-Type":"Application/json"
        }}).then(res=>{
            localStorage.setItem("token",res.data.token)
            setIsLogin(true)
        })
    }


    return (
        <>
            <div className="login-logo" >
                <Link to="/"><img src={logo} alt="" style={{width:"3%"}} /><span style={{color:"red",fontWeight:"bold"}}>araksh</span><span style={{color:"black",fontWeight:"bold"}}>Tech</span></Link>
            </div>
            <div className="app-cam">
                <form onSubmit={submitHander}>
                    <input type="text" className="text" value={form.email} name="email"  onChange={eventHender} />
                    <input type="password" value={form.password} name="password" onChange={eventHender} />
                    <div className="submit"><input type="submit" onclick="myFunction()" value="Login" /></div>
                </form>
            </div>
          
        </>
    )
}

export default Login