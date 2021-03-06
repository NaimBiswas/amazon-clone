import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { Spinner } from 'react-bootstrap';
const App = lazy(() => import('./App'))


ReactDOM.render(
   <React.StrictMode>

      <Suspense fallback={
         <div
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
         >
            <Spinner animation="border" variant='info' role="status">
               <span className="sr-only">Loading...</span>
            </Spinner>
            <h2 className='text-info mt-2'>
               Loading...</h2>
         </div>}>
         <StateProvider initialState={initialState} reducer={reducer}>
            <App />
         </StateProvider>
      </Suspense>


   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
