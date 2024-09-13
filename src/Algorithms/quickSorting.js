export function quickSorting (arr, left, right, steps, colors) {
  let colorKey = colors[colors.length - 1].slice();


  const partition= (arr, low, high) => {

    // Choose the pivot
    const pivot = arr[high];

    let i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements on the left side. Elements from low to
    // i are smaller after every iteration
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push(arr.slice());
            colorKey[i] = 1;
            colorKey[j] = 1;
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[j] = 0;
        }
    }

    // Move pivot after smaller elements and
    // return its position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push(arr.slice());
    colorKey[i+1] = 1;
    colorKey[high] = 1;
    colors.push(colorKey.slice());
    colorKey[i+1] = 0;
    colorKey[high] = 0;
    return i + 1;
}

// The QuickSort function implementation
const quickSort = (arr, low, high) => {
    if (low < high) {
        // pi is the partition return index of pivot
        const pi = partition(arr, low, high);
        steps.push(arr.slice());
        colorKey[pi] = 2;
        colors.push(colorKey.slice());
        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
    quickSort(arr,left,right);
    colors[colors.length - 1] = new Array(arr.length).fill(2);
};
