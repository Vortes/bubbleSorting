var div_arry = []
var div_height = 0

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
        div_arry.push(div)
        var height = randomIntFromInterval(10, 300)
        div.style.width = "15px";
        div.style.height = height.toString() + "px";
        div.style.background = "black";
        div.style.margin = "0.5%";
        div.style.float = 'left'
        document.getElementById("main").appendChild(div);
    }
}


function sort(){
    // change the pos of div id 1 and div id 2
    for(i = 0; i < 43; i++){
        console.log("Div" + i.toString())
        var element = document.getElementById["Div1"]
        console.log(element)
        element.style.left = '0px'
        element.style.top = '0px'
    }
}


function main() {
    setGraph()
    console.log(div_arry)
}
