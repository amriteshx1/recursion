
//Merge Sort
function merge(A,B,m,n){
    let i=0, j=0, k=0;
    let C = [];
    while(i<m && j<n){
        if(A[i] < B[j]){
            C[k++] = A[i++];
        }else{
            C[k++] = B[j++];
        }
    }

    for( ; i < m;i++){
        C[k++] = A[i];
    }

    for( ; j < n; j++){
        C[k++] = B[j];
    };
    return C;
};

function mergeSort(arr,l,h){
    if(l == h) return [arr[l]];

    let mid = (l + h) >> 1;
    let left = mergeSort(arr,l,mid);
    let right = mergeSort(arr,mid + 1, h);
    return merge(left,right,left.length,right.length);
    
};
let arr = [105, 79, 10, 110];
let sortedArr = mergeSort(arr, 0, arr.length - 1);
console.log(sortedArr);
