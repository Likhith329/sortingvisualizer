
async function Insertionsort(array,setArray,setCurrentindex,setCheckingwithindex,setValue,setIsInsertionsort,delay,setIsSorted) {
    setIsInsertionsort(true)
    for(let i=1;i<array.length;i++){
        let temp=array[i]
        let j=i-1
        setTimeout(() => {
            setValue(array[i])
        }, delay);
        while(j>=0 && temp<array[j]){
            await new Promise(resolve => setTimeout(resolve,delay))
            setCurrentindex(j)
            array[j+1]=array[j]
            j--
            setArray([...array])
        }
        array[j+1]=temp
    }
    setCurrentindex(-1)
    setCheckingwithindex(-1)
    setIsInsertionsort(false)
    setIsSorted(true)
  }
  

export default Insertionsort