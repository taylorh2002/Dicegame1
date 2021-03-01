let randomNum1 = Math.floor(Math.random() * 6 + 1);
let ranImage1 = "assets/dice" + randomNum1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src",ranImage1);
document.getElementById("p1").innerHTML("Score: " + randomNum1);