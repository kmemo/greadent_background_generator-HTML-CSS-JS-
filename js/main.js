
let main_sec = document.getElementById('main_sec');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let btn_random_color = document.getElementById('btn_random_color');


main_sec.style.background = "linear-gradient(to right," +color1.value + "," + color2.value + ")";
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

//.........................................................
//              function to change background color
//.........................................................
function setGradient(){
    main_sec.style.background = "linear-gradient("+color1.value + "," + color2.value + ")";
}

//.........................................................
//              function to create random color
//.........................................................
btn_random_color.addEventListener("click", randomGradient)
// function to create random color
// Math.random() >> return random number (0-9)
// 0xFFFFFF       => to create color
// 0xFFFFFF << 0  => (<<) this call(Bitwise shift operators)
// toString(16)   => why 16 >> {"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"}
function randomColor() {
    var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}

// after click on (random btn) >> running this function
function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}
