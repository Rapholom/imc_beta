import {useState} from 'react'
import './App.css';

import imgtop01 from './imgs/topImage_imc.png'
import NavbarImc from './components/NavbarImc';
import InsideImages from './components/InsideImages';
import SecDos from './components/SecDos';
import SecTres from './components/SecTres';

function App() {
  const [username, setUserName] = useState('');
  const [lastname, setLastName] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [userHeight, setUserHeight] = useState('')
  const [array, setarrayData] = useState([]);

  return (
    <div>
      <NavbarImc />


      <div className='imagenPrimeraTop'>
        <InsideImages username={username} setUserName={setUserName} lastname={lastname} setLastName={setLastName} userWeight={userWeight} setUserWeight={setUserWeight} 
        userHeight={userHeight} setUserHeight={setUserHeight} array={array} setarrayData={setarrayData} />

      </div>
      <SecDos username={username} setUserName={setUserName} lastname={lastname} setLastName={setLastName} userWeight={userWeight} setUserWeight={setUserWeight} 
        userHeight={userHeight} setUserHeight={setUserHeight} array={array} setarrayData={setarrayData} />
      <SecTres />



    </div>
  );
}

export default App;
