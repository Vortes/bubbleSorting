function BubbleSort(arry){
    var swap;
    var n = arry.length-1;
    var x = arry;
    do {
        swap = false;
        for (var i=0; i < n; i++) {
            if (x[i] < x[i+1]) {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
    return x.reverse();
}

test = [5,4,2,5,2,6,2,5,78];
console.log(BubbleSort(test));