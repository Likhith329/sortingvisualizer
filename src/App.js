import React, { useEffect, useState } from 'react'
import Bubblesort from './Algorithms/Bubblesort';
import Insertionsort from './Algorithms/Insertionsort';
import Mergesort from './Algorithms/Mergesort';
import Quicksort from './Algorithms/Quicksort';
import Selectionsort from './Algorithms/Selectionsort';

import './App.css';
import Home from './Components/Home';
const App = () => {
  const [array,setArray]=useState([])
  const [currentindex,setCurrentindex]=useState(-1)
  const [checkingwithindex,setCheckingwithindex]=useState(-1)
  const [isInsertionsort,setIsInsertionsort]=useState(false)
  const [isSorting,setIsSorting]=useState()
  const [isSorted,setIsSorted]=useState(false)
  const [value,setValue]=useState('')
  const [delay,setDelay]=useState(50)
  const [maxsize,setMaxsize]=useState(40)
  const [arraySize,setArraySize]=useState(20)

  const [selectedAlg,setSelectedAlg]=useState('')


  useEffect(()=>{
    randomarray()
  },[])
  function randomarray(){
    setIsSorted(false)
    setArray(Array.from({length:arraySize},()=> Math.floor(Math.random()*191+10)))
  }


 function handlesort(){
      setIsSorted(false)
      return (
      selectedAlg=='Bubblesort'?Bubblesort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted):
      selectedAlg=='Insertionsort'?Insertionsort(array,setArray,setCurrentindex,setCheckingwithindex,setValue,setIsInsertionsort,delay,setIsSorted):
      selectedAlg=='Quicksort'?Quicksort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted):
      selectedAlg=='Mergesort'?Mergesort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted):
      selectedAlg=='Selectionsort'?Selectionsort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted):()=>{}
      )
 }

 const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])
  
  useEffect(()=>{
    if(windowWidth<450)setMaxsize(20)
  },[windowWidth])
 
  
  return (
    <div className='maincont'>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SortingVisualizer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className=' btn btn-primary' onClick={()=>{randomarray()}} disabled={isSorting || isInsertionsort}>Generate random array</button>
              </li>
              <li className="nav-item">
                <select className="form-select  text-dark" aria-label="Default select example" value={selectedAlg} onChange={(e)=>{setSelectedAlg(e.target.value)}} disabled={isSorting || isInsertionsort}>
                  <option defaultValue={'Select Algorithm'}>Select Algorithm</option>
                  <option >Bubblesort</option>
                  <option >Selectionsort</option>
                  <option >Insertionsort</option>
                  <option >Quicksort</option>
                  <option >Mergesort</option>
                </select>
              </li>
              <li className="nav-item">
                <label className='text-white'>Delay ({delay} ms)</label>
               <input type="range" className="form-range" min="0" max="200" value={delay}  onChange={(e)=>{setDelay(e.target.value)}} disabled={isSorting || isInsertionsort}/>
              </li>
              <li className="nav-item">
                <label className='text-white'>Size ({arraySize} elements)</label>
               <input type="range" className="form-range" min="5" max={maxsize} value={arraySize}  onChange={async(e)=>{
                setArraySize(e.target.value)
                randomarray()
               }} disabled={isSorting || isInsertionsort}/>
              </li>
              <li className="nav-item">
                <button className=' btn btn-primary' onClick={()=>{handlesort()}} disabled={isSorting || isInsertionsort}>Sort <i className="bi bi-play-fill"></i></button>
              </li>
              <li className="nav-item">
                <div className='colorinfo'>
                  <div className='d-flex'><div className='ci'></div>Current Index</div>
                  <div className='d-flex'><div className='cci'></div>Index Under Checking</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home array={array} checkingwithindex={checkingwithindex} currentindex={currentindex} isInsertionsort={isInsertionsort} isSorted={isSorted} value={value} selectedAlg={selectedAlg} windowWidth={windowWidth}/>
    </div>
  )
}

export default App