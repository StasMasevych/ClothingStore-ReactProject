import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.js";

//routes

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

//redux
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/user-action.js'

//styles

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      console.log(user)
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user)) // null is signout, user obj is sigin
    })

      return unsub;
    
  },[dispatch])

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/shop/*" element={<Shop/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App;
