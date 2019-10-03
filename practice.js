// Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

function countPsumN(array) {

    let countPNumbers = [];
    let countNNumbers = 0;
    let countOfBoth = [];

    if (!array || array.length === 0) {

        return countOfBoth;
    } else {

        for (let i = 0; i < array.length; i++) {

            if (array[i] > 0) {

                countPNumbers.push(array[i]);
            }

            if (array[i] < 0) {

                countNNumbers += array[i];
            }
        }

        return countOfBoth = [countPNumbers.length, countNNumbers];
    }
}

countPsumN([10, 2, 15, -2, -10]);
//  return => [3,-12]
countPsumN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
//  return => [10,-65]
