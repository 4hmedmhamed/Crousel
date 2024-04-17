import React from 'react';
import { Route , Routes   } from 'react-router';
import Crousels from './Crousels';
import Sliderss from './Sliderss';
import Nav from './Nav';
function App() {
  return (
    <div>
 < Nav />
      <Routes>
        <Route path='/' element={ < Crousels />}></Route>
        <Route path='/Sliderss' element={ < Sliderss />}></Route>
      </Routes>
    </div>
  )
}

export default App