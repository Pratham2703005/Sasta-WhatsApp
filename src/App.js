import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import './App.css'
import LoginForm from './Components/LoginForm'
const ProjectID= "036885df-0d8c-4b3d-85aa-edfd9f2ffc65";
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
  
  return (
    <ChatEngine
        height="100vh"
        projectID={ProjectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
