function threeOddNumbers(arr) {

    //iterate through the array and check every number
    //length - 2 to always have sencond and third variable value defined
    for (var i = 0; i < arr.length - 2; i++) {
        var current = arr[i];
        var second = arr[i + 1];
        var third = arr[i + 2];
        var sum = current + second + third;

        console.log("sum", sum);

        //if three consecutive numbers sum is equal an odd number
        if (sum % 2 === 1) {
            return true;
        }
    }
    return false;
}
threeOddNumbers([1,2,3,4,5]) // true
// threeOddNumbers([0,-2,4,1,9,12,4,1,0]) // true
// threeOddNumbers([5,2,1]) // false
// threeOddNumbers([1,2,3,3,2]) // false