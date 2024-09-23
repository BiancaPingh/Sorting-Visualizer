export function mergeSorting (arr, left, right, steps, colors) {
  let colorKey = colors[colors.length - 1].slice();

  const mergeSort = (arr, left, right) => {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }

  const merge = (arr, left, mid, right) => {
      const n1 = mid - left + 1;
      const n2 = right - mid;

      let L = new Array(n1);
      let R = new Array(n2);

      for (let i = 0; i < n1; i++)
          L[i] = arr[left + i];
      for (let j = 0; j < n2; j++)
          R[j] = arr[mid + 1 + j];
      let i = 0, j = 0;
      let k = left;

      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              steps.push(arr.slice());
              colorKey[left + i] = 1;
              colorKey[k] = 1;
              colors.push(colorKey.slice());
              colorKey[k]=0;
              colorKey[left + i] = 0;
              i++;
          } else {
              arr[k] = R[j];
              steps.push(arr.slice());
              colorKey[k] = 1;
              colorKey[mid + 1 + j] = 1;
              colors.push(colorKey.slice());
              colorKey[mid + 1 + j] = 0;
              colorKey[k]=0;
              j++;
          }
          k++;
      }

      while (i < n1) {
          arr[k] = L[i];
          colorKey[left+i]=1;
          colorKey[k]=1;
          steps.push(arr.slice());
          colors.push(colorKey.slice());
          colorKey[left+ i] = 0;
          colorKey[k]=0;
          i++;
          k++;
      }

      while (j < n2) {
          arr[k] = R[j];
          colorKey[mid+j+1]=1;
          colorKey[k]=1;
          steps.push(arr.slice());
          colors.push(colorKey.slice());
          colorKey[mid + 1 + j] = 0;
          colorKey[k]=0;
          j++;
          k++;
      }
  }

  mergeSort(arr,left,right);
  colors[colors.length - 1] = new Array(arr.length).fill(2);
}
