
async function Bubblesort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted) {
    setIsSorting(true)
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1-i;j++){
            setCurrentindex(j)
            setCheckingwithindex(j+1)
            if(array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                setArray([...array])
            }
            await new Promise(resolve => setTimeout(resolve,delay))
        }
    }
    setCurrentindex(-1)
    setCheckingwithindex(-1)
    setIsSorting(false)
    setIsSorted(true)
  }
  

export default Bubblesort