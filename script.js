const sortButton = document.getElementById('sort')


const sortInputArray =(event)=>{
    event.preventDefault()

    // getElementsByClassName() returns array like object
    // spread operator converts into an Array
    // map() gets values from select elements
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));


    // const sortedValues = bubbleSort(inputValues)
    // const sortedValues = selectionSort(inputValues)
    // const sortedValues = insertionSort(inputValues)\
    const sortedValues = inputValues.sort((a, b) => a - b);

    // now able to click Sort button and see the inputted array in Output section
    updateUI(sortedValues)
}

// fallback value set to empty array
const updateUI =(array=[])=>{
    array.forEach((num,i)=>{
        const outputValueNode = document.getElementById(`output-value-${i}`)
        outputValueNode.innerText = num
    })
}

// sorts array using bubble sort
const bubbleSort =(array)=>{
    for (let i = 0; i < array.length; i++) {
        // nested for loop iterates through every element in array except last one
        for(let j = 0; j < array.length-1; j++){

            // for debugging purposes
            console.log(array,array[j],array[j+1])

            // achieve "bubble up" result
            // checks if current element is larger than next element
            if(array[j] > array[j+1]){

                // swap the 2 elements, "bubbling", larger element up towards end of array
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1]=temp
            }
        }
    }
    return array;
}

// selection sort
const selectionSort =(array)=>{
    for(let i = 0; i < array.length; i++){
        // selection sort relies on tracking index of smallest vlaues in array
        // ensures that if your current value is the smallest, it will be swapped with itself and not be moved
        let minIndex = i
        for(let j = i + 1; j< array.length; j++){

            // debugging purposes
            console.log(array,array[j],array[minIndex])

            if(array[j]<array[minIndex]){
                minIndex = j
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array
}

const insertionSort=(array)=>{
    // insertion algorithm starts sort at the beginning of list
    // meaning first element is already sorted
    for(let i = 1; i <array.length; i++){
        const currValue = array[i];
        let j = i - 1;

        // on each iteration of while loop, it's finding an element that is larger than current value
        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j]; // Shift element to the right
            j--; //Decrement j(prevents infinite loop)
        }

        // Place currValue at its correct position
        array[j + 1] = currValue;

    }
    return array
}

sortButton.addEventListener('click', sortInputArray)