function colors(){

    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    console.log(red);
    console.log(green);
    console.log(blue);

    console.log('#' + [red, green , blue].map( x => parseInt(x).toString(16).padStart(2,0)).join());

    let red_hex = parseInt(red).toString(16).padStart(2,0);
    let green_hex = parseInt(green).toString(16).padStart(2,0);
    let blue_hex = parseInt(blue).toString(16).padStart(2,0);

    let hexadecimal = "#" + red_hex + green_hex + blue_hex;

    // let hexadecimal = '#' + [red, green , blue].map( x => parseInt(x).toString(16).padStart(2,0)).join();

    document.getElementById("hexadecimal").innerHTML = hexadecimal;

    document.body.style.backgroundColor = 'rgb(' + red +',' + green + ',' + blue + ')';

    document.getElementById("output").innerHTML = 'rgb(' + red +',' + green + ',' + blue + ')';
}
