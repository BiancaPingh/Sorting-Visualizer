export const bubbleSorting = (arr, left, right, steps, colors) => {
    let colorKey = colors[colors.length - 1].slice();
    let i, j, temp;
    let swapped=true;
    for (i = 0; i < arr.length - 1 && swapped == true; i++)
    {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                steps.push(arr.slice());
                colorKey[j+1] = 1;
                colorKey[j] = 1;
                colors.push(colorKey.slice());
                colorKey[j+1] = 0;
                colorKey[j] = 0;
            }
        }
        colorKey[arr.length - i] = 2;
        steps.push(arr.slice());
        colors.push(colorKey.slice());
    }
    colors[colors.length - 1] = new Array(arr.length).fill(2);
    return;
};
