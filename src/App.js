import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
const App=()=>{
  console.log({chatAppProps}) 
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
     height="100vh"
     projectID="
e94244c4-8867-47d7-90d5-768e92b3cdd3"
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
     onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
     
}

export default App;
