//iterative fibonacci solution
function fibs(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i == 1){
            result.push(0)
        } else if (i == 2){
            result.push(1)
        } else {
            let next = result[result.length- 1] + result[result.length - 2];
            result.push(next)
        }

    }
    return result
}

//recursive fibonacci solution
function fibsRec(num){
    if(num<3){
return [0,1]
    } else {
        let recursion = fibsRec(num-1);
        recursion.push(recursion[recursion.length-1]+recursion[recursion.length-2])
        return recursion;
    }

}