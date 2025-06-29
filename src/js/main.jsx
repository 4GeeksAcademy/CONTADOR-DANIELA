import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import {Home} from './components/Home';

const app = ReactDOM.createRoot(document.getElementById('root'))
 
  let counter = 0

  setInterval(() => {

    const Kendall = Math.floor(counter / 100000);
    const Kylie = Math.floor(counter / 10000);
    const Kim = Math.floor(counter / 1000);
    const Klhoe= Math.floor(counter / 100);
    const Kourtney = Math.floor(counter / 10);
    const Kriss = Math.floor(counter / 1);

    counter++;

    app.render(
      <React.StrictMode>
        <Home Kendall={Kendall} Kylie={Kylie} Kim={Kim} Klhoe={Klhoe} Kourtney={Kourtney} Kriss={Kriss}/>

      </React.StrictMode>,
    )
  }, 1000)
 
