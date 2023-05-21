

import { useEffect, useState } from 'react';
import './App.css'
import Axios from 'axios';
function App() {
  const [excuseGenerated,SetExcuse] = useState('')
const HandleFetch = (excuse) =>{
  Axios.get(`https://excuser-three.vercel.app/${excuse}`)
  .then((res) => {SetExcuse(res.data[1].excuse)})
}
  return (
    <div className="container">
      <div className="title">Generate an Excuse</div>
      <div className="btns">
      <button onClick={()=>HandleFetch('family')}>Family</button>
      <button onClick={()=>HandleFetch('office')}>Office</button>
      <button onClick={()=>HandleFetch('children')}>Children</button>
      <button onClick={()=>HandleFetch('funny')}>Funny</button>
      <button onClick={()=>HandleFetch('developer')}>Developers</button>
      <button onClick={()=>HandleFetch('party')}>Party</button>
      <button onClick={()=>HandleFetch('Unbelievable')}>Unbelievable</button>
      </div>
      <div className="outPut"><p>{excuseGenerated}</p></div>
    </div>
  )
}



































































































