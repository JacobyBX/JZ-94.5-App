import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route , Routes} from 'react-router-dom';
import './App.css';
import { getUser } from './httpcalls/authThunk';
import Homepage from './mainapp/homepage';
import MainDirectory from './mainapp/mainDirectory';
import Login from './auth/login';

const App = () => {
  const dispatch = useDispatch()
  const [appLoad, setAppLoad] = useState(true)
  const login = useSelector(state => state.auth.userActive)

  // Remove this line when you're ready to implement the login page
  const [auth, setAuth] = useState(true)

  useEffect(() => {
    dispatch(getUser()).then(res => {
      setAppLoad(false)
    })
  }, [])
  return (

    
   <>
   {(appLoad) ? 
   ""
   : 
    <Routes>
    {(login || auth) ? 
        <Route path='/' element={<MainDirectory />} >
            <Route path='/' element={<Homepage />} >
              
              
          </Route>
        </Route>
    :
    <>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<Navigate to="/" replace />} />
    </>
    }
  </Routes>
   }
   </>
  );
}

export default App;
