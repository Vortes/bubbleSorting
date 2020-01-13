function BubbleSortTest(arry) {
    var n = arry.length;
    for(i = 0; i < n; i++){
        for(j = 0; j < n-i-1; j++){
            if(arry[j] > arry[j+1]){
                var temp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = temp;
            }
        }
    }
    return arry
}

console.log(BubbleSortTest([73,21,2,2,3,4,90,12,23,56,4,2]))