async function Selectionsort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted) {
    setIsSorting(true)
    for(let i=0;i<array.length;i++){
        let min=array[i],minind
        for(let j=i;j<array.length;j++){
            setCurrentindex(i)
            setCheckingwithindex(j)
            await new Promise(resolve => setTimeout(resolve,delay))
            if(min>=array[j]){
                minind=j
                min=array[j]
            }
            setArray([...array])
        }
        if(min!=array[i]){
            let temp=array[i]
            array[i]=array[minind]
            array[minind]=temp
        }
        
        }
        setCurrentindex(-1)
        setCheckingwithindex(-1)
        setIsSorting(false)
        setIsSorted(true)
  }
  

export default Selectionsort

