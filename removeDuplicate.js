function removeDuplicate(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const input = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const output = removeDuplicate(input);
console.log(output);