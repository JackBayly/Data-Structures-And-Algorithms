//recursive merge sort solution
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let half = Math.floor(arr.length / 2);
    let right = arr.slice(half);
    let left = arr.slice(0, half);
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}