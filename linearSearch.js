function linearSearch(arr, string) {
    if (!Array.isArray(arr)) {
        throw new Error("First argument must be an array");
    };

    if (typeof string !== 'string') {
        throw new Error("Second argument must be a string");
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === string) {
            return "Yes, the string exists in the array";
        }
    }

    return "No, the string does not exist in the array";
}

const arr = ["apple", "banana", "cherry", "date"];
const string1 = "banana";
const string2 = "meat";

console.log(linearSearch(arr, string1));
console.log(linearSearch(arr, string2));