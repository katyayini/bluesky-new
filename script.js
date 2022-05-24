var elbtn = document.getElementsByClassName("btn");
var elresult1 = document.getElementsByClassName("wrong");
var elresult2 = document.getElementsByClassName("correct");
var elques = document.getElementsByClassName("question");
var eldone = document.getElementsByClassName("done");
var elhs = document.getElementsByClassName("highscores");
var elstart = document.getElementsByClassName("start-quiz");
var sum;
var arr = [];
var arr1 = [];
var elempara = document.createElement("p");
var elpara = document.createElement("p");
var time = 75;
var eltime = document.getElementsByClassName("timer");
var elp = document.createElement("p");
var elscores = document.getElementsByClassName("p1");


/*When user clicks start button */
elbtn[0].addEventListener("click", function () {
    sum = 0;
    elstart[0].style.display = "none";
    elques[0].style.display = "inline";
    displayTime();


});

/*When user clicks a button on the first question box*/
elbtn[1].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext1, 1000);

});

elbtn[2].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext1, 1000);
});

elbtn[3].addEventListener("click", function () {
    elresult2[0].style.display = "inline";
    setTimeout(displayNext2, 1000);
    sum += 10;
});

elbtn[4].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext1, 1000);
});

function displayNext1() {
    elques[0].style.display = "none";
    elresult1[0].style.display = "none";
    elques[1].style.display = "inline";
}

function displayNext2() {
    elques[0].style.display = "none";
    elresult2[0].style.display = "none";
    elques[1].style.display = "inline";
}


/*When user clicks a button on the second question box */
elbtn[5].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext3, 1000);
});

elbtn[6].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext3, 1000);
});

elbtn[7].addEventListener("click", function () {
    elresult2[0].style.display = "inline";
    setTimeout(displayNext4, 1000);
    sum += 10;
});

elbtn[8].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext3, 1000);
});

function displayNext3() {
    elques[1].style.display = "none";
    elresult1[0].style.display = "none";
    elques[2].style.display = "inline";
}

function displayNext4() {
    elques[1].style.display = "none";
    elresult2[0].style.display = "none";
    elques[2].style.display = "inline";
}


/*When user clicks a button on the third question box */
elbtn[9].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext5, 1000);

});

elbtn[10].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext5, 1000);
});

elbtn[11].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext5, 1000);
});

elbtn[12].addEventListener("click", function () {
    elresult2[0].style.display = "inline";
    setTimeout(displayNext6, 1000);
    sum += 10;
});

function displayNext5() {
    elques[2].style.display = "none";
    elresult1[0].style.display = "none";
    elques[3].style.display = "inline";
}

function displayNext6() {
    elques[2].style.display = "none";
    elresult2[0].style.display = "none";
    elques[3].style.display = "inline";
}



/*When user clicks a button on the fourth question box */
elbtn[13].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext7, 1000);

});

elbtn[14].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext7, 1000);
});

elbtn[15].addEventListener("click", function () {
    elresult2[0].style.display = "inline";
    setTimeout(displayNext8, 1000);
    sum += 10;
});

elbtn[16].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    time = time - 10;
    setTimeout(displayNext7, 1000);
});


function displayNext7() {
    elques[3].style.display = "none";
    elresult1[0].style.display = "none";
    elques[4].style.display = "inline";
}

function displayNext8() {
    elques[3].style.display = "none";
    elresult2[0].style.display = "none";
    elques[4].style.display = "inline";
}

/*When user clicks a button on the fifth question box */
elbtn[17].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    setTimeout(displayNext9, 1000);
});

elbtn[18].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    setTimeout(displayNext9, 1000);
});

elbtn[19].addEventListener("click", function () {
    elresult1[0].style.display = "inline";
    setTimeout(displayNext9, 1000);
});

elbtn[20].addEventListener("click", function () {
    elresult2[0].style.display = "inline";
    sum += 10;
    setTimeout(displayNext10, 1000);

});



function displayNext9() {
    clearInterval(countdown);
    eltime[0].style.display = "none";
    elques[4].style.display = "none";
    elresult1[0].style.display = "none";
    eldone[0].style.display = "inline";
    document.getElementsByClassName("p2")[0].style.display = "inline";
    elempara.style.display = "inline";
    elempara.style.fontFamily = "verdana";
    elempara.style.fontSize = "14px";
    elempara.innerText = sum;
    time = 75;
    eltime[0].removeChild(elp);
    document.getElementsByClassName("p2")[0].appendChild(elempara);

}

function displayNext10() {
    clearInterval(countdown);
    eltime[0].style.display = "none";
    elques[4].style.display = "none";
    elresult2[0].style.display = "none";
    eldone[0].style.display = "inline";
    document.getElementsByClassName("p2")[0].style.display = "inline";
    elempara.style.display = "inline";
    elempara.innerText = sum;
    elempara.style.fontFamily = "verdana";
    elempara.style.fontSize = "14px";
    time = 75;
    eltime[0].removeChild(elp);
    document.getElementsByClassName("p2")[0].appendChild(elempara);
}

/*When user clicks submit to submit score and initials*/
elbtn[21].addEventListener("click", function () {
    var init = document.getElementById("cred").value;
    arr.push(init);
    arr1.push(sum);
    localStorage.setItem("initials", JSON.stringify(arr));
    localStorage.setItem("scores", JSON.stringify(arr1));
    eldone[0].style.display = "none";
    elhs[0].style.display = "inline";
    var obj1 = JSON.parse(localStorage.getItem("initials"));
    var obj2 = JSON.parse(localStorage.getItem("scores"));
    var str = "";
    for (i = 0; i < obj1.length; i++) {
        str += (i + 1) + ". " + (`${obj1[i]}`) + " - " + (`${obj2[i]}`) + "\n";
    }
    elpara.innerText = str;
    elpara.style.fontFamily = "verdana";
    elpara.style.fontSize = "14px";
    elpara.style.backgroundColor = "#DAC3EA";
    elpara.style.margin = "20px";
    document.getElementsByClassName("p3")[0].appendChild(elpara);

});

/*When user clicks go back*/
elbtn[22].addEventListener("click", function () {

    elhs[0].style.display = "none";
    elstart[0].style.display = "inline";

});

/*When user clicks clear highscores*/
elbtn[23].addEventListener("click", function () {
    while (arr.length) {
        arr.pop();
        arr1.pop();
    }
    document.getElementsByClassName("p3")[0].removeChild(elpara);
    localStorage.clear();

});

/*Timer countdown*/
function displayTime() {

    countdown = setInterval(function () {
        eltime[0].style.display = "inline";
        elp.innerText = time;
        elp.style.display = "inline";
        elp.style.fontFamily = "verdana";
        elp.style.fontSize = "14px";
        eltime[0].appendChild(elp);
        time--;
        if (time === 0) {
            eltime[0].style.display = "none";
            elques[0].style.display = "none";
            elques[1].style.display = "none";
            elques[2].style.display = "none";
            elques[3].style.display = "none";
            elques[4].style.display = "none";
            elresult1[0].style.display = "none";
            elresult2[0].style.display = "none";
            eldone[0].style.display = "inline";
            document.getElementsByClassName("p2")[0].style.display = "inline";
            elempara.style.display = "inline";
            elempara.innerText = sum;
            elempara.style.fontFamily = "verdana";
            elempara.style.fontSize = "14px";
            time = 75;
            eltime[0].removeChild(elp);
            document.getElementsByClassName("p2")[0].appendChild(elempara);
            clearInterval(countdown);

        }
    }, 1000);
}

/*When user clicks view highscores*/
elscores[0].addEventListener("click", function () {
    eltime[0].style.display = "none";
    elstart[0].style.display = "none";
    elques[0].style.display = "none";
    elques[1].style.display = "none";
    elques[2].style.display = "none";
    elques[3].style.display = "none";
    elques[4].style.display = "none";
    elresult1[0].style.display = "none";
    elresult2[0].style.display = "none";
    eldone[0].style.display = "none";
    elhs[0].style.display = "inline";
    time = 75;
    eltime[0].removeChild(elp);
    clearInterval(countdown);

});