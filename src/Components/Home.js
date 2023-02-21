import React, { useEffect, useState } from 'react'
const Home = ({array,currentindex,checkingwithindex,value,isInsertionsort,selectedAlg,isSorted}) => {

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
  
  return (
    <div className='container cont'>
        <h4>{selectedAlg}</h4>
      <div className='bars'>
        {array.map((height,index)=>(
          <div key={index} style={{height:`${windowWidth<450?height/1.2:isInsertionsort  && index==currentindex ?value*2:height*2}px`,width:`${height/10}px`}} 
          className={
            `bar 
            ${index==currentindex?'currentindex':''} 
            ${index==checkingwithindex?'checkingwithindex':''} 
            ${isSorted?'sorted':''}
            `}>
            <div className='value'>{ isInsertionsort &&index==currentindex?value:height}</div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default Home