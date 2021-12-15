import logo from './logo.svg';
import './App.css';

import imgtop01 from './imgs/topImage_imc.png'



import NavbarImc from './components/NavbarImc';
import InsideImages from './components/InsideImages';
import SecDos from './components/SecDos';
import SecTres from './components/SecTres';




function App() {
  return (
    <div>
      <NavbarImc />


      <div className='imagenPrimeraTop'>
        <InsideImages />

      </div>
      <SecDos />
      <SecTres />



    </div>
  );
}

export default App;
