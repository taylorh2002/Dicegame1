let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNum2 = Math.floor(Math.random() * 6 + 1);
let ranImage1 = "assets/dice" + randomNum1 + ".png";
let ranImage2 = "assets/dice" + randomNum2 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src",ranImage1);
document.getElementsByTagName("img")[1].setAttribute("src",ranImage2);

if (randomNum1 < randomNum2)
{
    document.getElementById("h1").innerHTML = "Player 2 won";
}

else if(randomNum1 == randomNum2)
{
    document.getElementById("h1").innerHTML = "Draw";
}
