import React, { useContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
 import Routing from './Router/Routing'
 import { DataContext } from './Componet/DataProvider/DataProvider'
 import { auth } from './Utility/firebase'
 import { Type } from './Utility/action.type' 
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //check if there is authenticated user during app mount and set the state of user with the value of signed in user so that it will keep the data and signout option will be availed
        // console.log(`APP onAuthStateChanged > if case executed 👇 ${JSON.stringify(authUser)}`);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        //check if there is no authenticated user during app mount and set the state of user as null so that sign in can be made
        // console.log(`APP onAuthStateChanged > else case executed 👉  ${JSON.stringify(authUser)}`);
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
    <Routing />
    </BrowserRouter>

  )
}

export default App
