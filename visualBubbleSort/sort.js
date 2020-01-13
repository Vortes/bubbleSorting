var div_height = 0
var current = 0
amount_of_rect = 42

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


function clearScreen() {
    document.body.innerHTML = "";
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function setGraph() {
    for(i = 0; i <= amount_of_rect; i++){
        var div = document.createElement('div');
        div.setAttribute("id", "Div" + i.toString());
        var height = randomIntFromInterval(10, 300)
        div.style.position = 'absolute';
        current += 32
        div.style.left = current.toString() + 'px';
        div.style.width = "15px";
        div.style.height = height.toString() + "px";
        div.style.background = "black";
        document.getElementById("main").appendChild(div);
    }
} 


function sort(){
    // change the pos of div id 1 and div id 2
    // var element = document.getElementById("Div0")
    // var element2 = document.getElementById("Div1")

    // style = window.getComputedStyle(element)
    // div_height = style.getPropertyValue('height')

    // style2 = window.getComputedStyle(element2)
    // div_height2 = style2.getPropertyValue('height')

    // div_height = parseInt(div_height.replace('px', ''))
    // div_height2 = parseInt(div_height2.replace('px', ''))
    // console.log(div_height, div_height2)

    // if(div_height > div_height2) {
    //     console.log('im in')
    //     x = element.offsetLeft
    //     x2 = element2.offsetLeft
    //     element2.style.left = x.toString() + 'px';
    //     element.style.left = x2.toString() + 'px';
    // }

    var div_pair = {}
    
    for(i = 0; i <= amount_of_rect; i++){
        var current = "Div"+ i.toString()
        var element = document.getElementById(current)
        var style = window.getComputedStyle(element)
        var div_height = style.getPropertyValue('height')
        div_pair[current] = div_height
    }

    console.log(div_pair)
}


function main() {
    setGraph()
}
