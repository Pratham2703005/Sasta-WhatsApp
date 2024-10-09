import React, { useState } from 'react'
import axios from 'axios'
import bgImg from '../assets/background.jpg'
const LoginForm = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const authObj = { 'Project-ID' : '036885df-0d8c-4b3d-85aa-edfd9f2ffc65', 'User-Name' : username, 'User-Secret' : password  }
        try{
           await axios.get('https://api.chatengine.io/chats',{headers: authObj});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        }catch(e){
            seterror('Wrong Details!!');
            
        }
    }
    return (
      <div className='wrapper' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='form' style={{background:"#fff", padding:"20px", borderRadius:"20px"}}>
        <h1 style={{fontSize:"73px", textAlign: "center"}}><i className="fa-brands fa-whatsapp" ></i></h1>
        <h1 className='title' style={{color:"#000"}}>Sasta WhatsApp</h1>
        <form onSubmit={handleSubmit}>
        
        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className='input' placeholder='Username' required style={{border: "1px solid black", borderRadius: "20px"}}/>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className='input' placeholder='Password' required style={{border: "1px solid black", borderRadius: "20px"}}/>
        <div align ="center" >
            <button type='submit' className='button' >
                <span style={{textTransform:"none"}}>Enter</span>
            </button>
        </div>
        <h2 className='error' style={{color:"#f00" , padding:"20px"}}>{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
