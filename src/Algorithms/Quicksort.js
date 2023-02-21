
async function Quicksort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted) {
    setIsSorting(true)
    sort(array)
    async function sort(array) {
      const stack = [[0, array.length - 1]];
      while (stack.length) {
        const [lo, hi] = stack.pop();
        if (hi - lo < 1) continue;
        const pivot = array[hi];
        let i = lo - 1;
        for (let j = lo; j < hi; j++) {
          setCurrentindex(hi)
          setCheckingwithindex(j)
          if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            setArray([...array]);
            
          }
          await new Promise(resolve => setTimeout(resolve,delay));
        }
        i++;
        [array[i], array[hi]] = [array[hi], array[i]];
        const middle = i;
        stack.push([lo, middle - 1], [middle + 1, hi]);
      }
      setArray([...array])
      setCurrentindex(-1)
      setCheckingwithindex(-1)
      setIsSorting(false)
      setIsSorted(true)
      return array;
    }
   
    
  }
  

export default Quicksort

