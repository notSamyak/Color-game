// alert("Here we go!");

function colorGenerator(){
    // value for r
    var r = Math.floor(Math.random() * 255 + 1);

    // value for g
    var g = Math.floor(Math.random() * 255 + 1);

    // value for b
    var b = Math.floor(Math.random() * 255 + 1);

    // return string
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function colorPicker(){
    var pick=Math.floor(Math.random() * colors.length);
    return colors[pick];
}

function colorChooser(num){
    var arr=[];

    for (var i = 0; i < num; i++) {
        arr[i]=colorGenerator();
    }

    return arr;
}

var num = 6;
var colors = colorChooser(6);
var pickedColor=colorPicker();
var rgb = document.getElementById("rgb");
var square = document.getElementsByClassName("square");
var msg = document.querySelector("#message");
var newColors = document.querySelector("button");
var h1 = document.getElementsByTagName("h1")[0];
var easy = document.querySelector("button:nth-of-type(2)")
var hard = document.getElementsByClassName("difficulty")[0];

rgb.textContent=pickedColor;

for(var i=0; i<square.length;i++){

    square[i].style.background = colors[i];
    square[i].addEventListener("click", function(){
        var clickedColor=this.style.background;

        // console.log(pickedColor, clickedColor);
        if(clickedColor==pickedColor){
            changeColor(clickedColor);
            msg.textContent = "Correct!"; 
            msg.style.color = "green";
            newColors.textContent= "Play Again?";
            document.querySelector("h1").style.background=clickedColor;
        }
        else if(clickedColor!=pickedColor){
            this.style.background = "#232323";
            msg.textContent = "Try Again!";
            msg.style.color = "red";
        }

    });
}

function changeColor(color){
    for (var i = 0; i < square.length; i++){
        square[i].style.background = color;
    }
}

newColors.addEventListener("click", function(){
    colors = colorChooser(num);
    pickedColor = colorPicker();
    rgb.textContent = pickedColor;

    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    newColors.textContent = "new colors";
    msg.textContent = "";
});

easy.addEventListener("click", function(){
    num=3;
    colors = colorChooser(num);

    easy.classList.add("difficulty");
    hard.classList.remove("difficulty");

    pickedColor = colorPicker();
    rgb.textContent = pickedColor;

    for (var i = 0; i < 3; i++) {
        square[i].style.background = colors[i];
    }
    for (var i = 3; i < square.length; i++) {
        square[i].style.display = "none";
    }
    h1.style.background = "steelblue";
});

hard.addEventListener("click", function(){
    num=6;
    colors = colorChooser(num);

    easy.classList.remove("difficulty");
    hard.classList.add("difficulty");

    pickedColor = colorPicker();
    rgb.textContent = pickedColor;

    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
    h1.style.background = "steelblue";
});