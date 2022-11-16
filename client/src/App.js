import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SingleCard from './components/SingleCard.js'
import { StreamChat} from "stream-chat";
import {Chat} from 'stream-chat-react';
import Cookies from "universal-cookie";
import JoinGame from './components/JoinGame';





function App() {
  
  
  const api_key = process.env.REACT_APP_MY_API_KEY
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false)
  };

useEffect(() => {
  if (token) {
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    token
  ).then((user) => {
    setIsAuth(true);
  })
  }
}, [token]);




  
   
  return (
    <div className="app">
      {isAuth ? (
      <Chat client={client}>
      {/* <Game /> */}
      <JoinGame   />
      <button onClick={logOut}>Log out</button> 
      </Chat>
      
      ) : ( 
      <>
      <SignUp setIsAuth={setIsAuth} />
      <Login setIsAuth={setIsAuth} />
      </>
      )}
    </div>
  );
}

export default App;
