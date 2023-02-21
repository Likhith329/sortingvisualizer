
async function Mergesort(array,setArray,setCurrentindex,setCheckingwithindex,delay,setIsSorting,setIsSorted) {
    setIsSorting(true)
    mergeSort(array,array.length)

    async function mergeSort(arr , n) {
        var curr_size;
        var left_start;
        for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
            for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
                var mid = Math.min(left_start + curr_size - 1, n - 1);
                var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
                await merge(arr, left_start, mid, right_end)
            }
        }
        setIsSorting(false)
        setIsSorted(true)
    }
  

    async function merge(arr , l , m , r) {
        var i, j, k;
        var n1 = m - l + 1;
        var n2 = r - m;
        var L = Array(n1).fill(0);
        var R = Array(n2).fill(0);
        for (i = 0; i < n1; i++){
            L[i] = arr[l + i];
        }
        for (j = 0; j < n2; j++){
            R[j] = arr[m + 1 + j];
        }
        i = 0;
        j = 0;
        k = l;
        
        while (i < n1 && j < n2) {
            setCurrentindex(k)
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            setArray([...arr])
            await new Promise(resolve => setTimeout(resolve,delay))
            k++;
        }
        while (i < n1) {
            setCurrentindex(k)
            arr[k] = L[i];
            i++;
            k++;
            setArray([...arr])
           
        }
        while (j < n2) {
            setCurrentindex(k)
            arr[k] = R[j];
            j++;
            k++;
            setArray([...arr])

        }
        setCurrentindex(-1)
    }
    
    
  
    
  }
  

export default Mergesort