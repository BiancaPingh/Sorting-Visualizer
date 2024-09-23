export const heapSorting = (arr, left, right, steps, colors) => {
  let colorKey = colors[colors.length - 1].slice();

  const sort = (arr) => {
        var N = arr.length;

        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            heapify(arr, N, i);

        for (var i = N - 1; i > 0; i--) {
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            steps.push(arr.slice());
            colorKey[i] = 2;
            colors.push(colorKey.slice());

            heapify(arr, i, 0);
        }
    }

    const heapify = (arr, N, i) =>  {
        var largest = i;
        var l = 2 * i + 1;
        var r = 2 * i + 2;

        if (l < N && arr[l] > arr[largest])
            largest = l;

        if (r < N && arr[r] > arr[largest])
            largest = r;

        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            steps.push(arr.slice());
            colorKey[i] = 1;
            colorKey[largest] = 1;
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[largest] = 0;

            heapify(arr, N, largest);
        }
    }
    sort(arr);
    colors[colors.length - 1] = new Array(arr.length).fill(2);
}
