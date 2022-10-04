// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  sum = arr.reduce((s, i) => s + i, 0);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (item of arrOfArr) {
    if (func(item) > max) {
      max = func(item);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  arr.sort((a, b) => a - b);

  return Math.abs(arr[arr.length - 1] - arr[0]);
}
