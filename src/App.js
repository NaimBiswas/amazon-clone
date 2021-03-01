import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MyRoute from './Components/Header/MyRoute';
import Home from './Components/Home/Home';

function App() {
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
