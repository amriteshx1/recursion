
//Using iteration
function fibs(n){

    let arr = [];
    if(n>0)arr.push(0);
    if(n>1)arr.push(1);

    let first = 0;
    let second = 1;

    for(let i=2; i<n; i++){
            let next = first + second;
            arr.push(next);
            first = second;
            second = next;
    }
    return arr;
}; 
console.log(fibs(8));

//Using recursion
function fibsRec(n){
    if(n<=0)return [];
    if(n===1)return[0];
    if(n===2)return[0,1];

    let arr = fibsRec(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));