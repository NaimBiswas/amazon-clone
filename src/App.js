import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoute from './Components/Header/MyRoute';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
   const [{ }, dispatch] = useStateValue();
   useEffect(() => {
      auth.onAuthStateChanged(authUser => {
         if (authUser) {

            dispatch({
               type: "SET_USER",
               user: authUser
            })
         } else {
            dispatch({
               type: "SET_USER",
               user: null
            })
         }
      });
   }, [])
   return (
      <div className="App">
         {/* <h2>Hello This is Naim Biswas 🐱‍🏍
         <i>Let's Build a Amazon Clone</i>
         </h2> */}
         {/* Header  */}
         <BrowserRouter>

            <MyRoute></MyRoute>
         </BrowserRouter>
      </div>
   );
}

export default App;
