var div_height = 0
var current = 0

function BubbleSort(arry) {
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


function BubbleSortTest(arry) {
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


function clearScreen() {
    document.body.innerHTML = "";
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function setGraph() {
    for(i = 0; i < 43; i++){
        var div = document.createElement('div');
        div.setAttribute("id", "Div" + i.toString());
        var height = randomIntFromInterval(10, 300)
        div.style.position = 'absolute';
        current += 34
        div.style.left = current.toString() + 'px';
        div.style.width = "15px";
        div.style.height = height.toString() + "px";
        div.style.background = "black";
        document.getElementById("main").appendChild(div);
    }
} 


function sort(){
    // change the pos of div id 1 and div id 2
    var element = document.getElementById("Div0")
    var element2 = document.getElementById("Div1")

    style = window.getComputedStyle(element)
    div_height = style.getPropertyValue('height')

    style2 = window.getComputedStyle(element2)
    div_height2 = style2.getPropertyValue('height')

    div_height = parseInt(div_height.replace('px', ''))
    div_height2 = parseInt(div_height2.replace('px', ''))
    console.log(div_height, div_height2)
    if(div_height > div_height2) {
        console.log('im in')
        x = element.offsetLeft
        x2 = element2.offsetLeft
        element2.style.left = x.toString() + 'px';
        element.style.left = x2.toString() + 'px';
    }



}


function main() {
    setGraph()
}
