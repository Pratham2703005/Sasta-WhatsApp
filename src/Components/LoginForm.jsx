import React, { useState } from 'react'
import axios from 'axios'
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
            seterror('GLAT DETAILS DAALI HAI');
        }
    }
    return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>
            Sasta WhatsApp
        </h1>
        <form onSubmit={handleSubmit}>
        
        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className='input' placeholder='Username' required/>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className='input' placeholder='Password' required/>
        <div align ="center">
            <button type='submit' className='button'>
                <span> Start App</span>
            </button>
        </div>
        <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
