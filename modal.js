const button1 = document.getElementsByClassName("button")[0];
const button2 = document.getElementsByClassName("button")[1];


const mpopup = document.getElementById('mpopupBox');
const mpopup1 = document.getElementById('mpopupBox1');


//var mpLink = document.getElementById("mpopupLink");


const close1 = document.getElementsByClassName("close")[0];
const close2 = document.getElementsByClassName("close1")[0];

button1.onclick = function() {
    mpopup.style.display = "block";
    mpopup.querySelector("p").innerHTML = "Ett skolarbete till Chas Academy, där vi skulle bygga ett enklare spel med JavaScript.";
};

button2.onclick = function() {
    mpopup.style.display = "block";
    mpopup.querySelector("p").innerHTML = "Ett skolarbete till Malmö Universitet, där vi skulle hämta info från en filmdatabas via API.";
};



close1.onclick = function() {
    mpopup.style.display = "none";
};

close2.onclick = function() {
    mpopup1.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
};

//window.onclick = function(event) {
   // if (event.target == mpopup1) {
      //  mpopup1.style.display = "none";
    //}
//};

