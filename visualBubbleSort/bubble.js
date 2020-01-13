
var dict = {
    Div0: 156,
    Div1: 32,
    Div2: 56,
    Div3: 90,
}

// console.log(Object.keys(dict));
// temp = dict['Div0']
// dict['Div0'] = dict['Div1'] 
// dict['Div1'] = temp  // switches div order and value
// console.log(Object.values(dict));

function BubbleSort(dict) {
    var n = Object.keys(dict).length;
    for(i = 0; i < n; i++){
        for(j = 0; j < n-i-1; j++){
            current = "Div"+ j.toString()
            next = "Div"+ (j+1).toString()
            if(dict[current] > dict[next]){
                temp = dict[current]
                dict[current] = dict[next] 
                dict[next] = temp 
            }
        }
    }
    return dict
}

console.log(BubbleSort(dict))

