//задание с группированием слов
var colorBD = ["white", "rgb(255,255,203)", "rgb(205,205,94)", "rgb(255, 205, 94)", "rgb(180,255,87)", "rgb(255,205,152)", "rgb(0,255,148)", "rgb(255,205,205)", "rgb(67,255,203)", "rgb(222,154,154)", "rgb(126, 205, 205)", "rgb(222,154,207)", "rgb(154,154,207)", "rgb(205,205,255)"];
var flag = 1;
var result = [];

function colorWord() {

    var e = window.event;
    var elem = e.target;
    id1 = elem.id;

    var word = document.getElementById(id1);

    if (flag < numberKoren) {
        word.style.backgroundColor = colorBD[flag];
        flag++;
    } else {
        word.style.backgroundColor = colorBD[flag];
        flag = 1;
    }

    
};

//Вывод всех попыток на форму
function checkColorWord(){
    var printBlock = document.getElementById("printBlock");
    //var pElement = document.createElement("tr");
    result.push(clickProvColorWord())
    //var prompt = klaster()
    var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
    var len = result.length; 
    for (var i = 0; i < len; i++){
        strColorWord += "<tr> <td>"
        strColorWord += (i + 1).toString() + "</td>"
        strColorWord += "<td>" + result[i].toString() + "</td>"
    }
    //pElement.innerHTML = str + "</tr>"
    //printBlock.appendChild(pElement);
    printBlock.innerHTML = strColorWord
}

function clickProvColorWord() {
    
    for (var i = 0; i < this.lenght; i++) {
        var s = "word" + i;
        word = document.getElementById(s);
        if (word == this.wordcolor[0][i]) this.wordcolor[2][i] = word.style.backgroundColor;
    }
    var selekt = true;
    var color = [];
    var oneColor = true;
    var flagColor = true;
    for (var j = 1; j <= numberKoren; j++) {
        for (var i = 0; i < lenght; i++) {
            if (wordcolor[1][i] == j) {
                if (oneColor) {
                    color[j] = wordcolor[2][i];
                    for (var jj = 1; jj < j; jj++) {
                        if (color[j] == color[jj]) flagColor = false;
                    }
                    if (flagColor) {
                        color[j] = wordcolor[2][i];
                        oneColor = false;
                    }
                    else {
                        wordcolor[0][i].style.backgroundColor = 'white';
                        selekt = false;
                    }
                }
            }
        }
        flagColor = true;
        oneColor = true;
    }

    var colTrueAnswer = 0;
    for (var j = 1; j <= numberKoren; j++) {
        for (var i = 0; i < lenght; i++) {
            if (wordcolor[1][i] == j) {
                if (wordcolor[2][i] != 'white') colTrueAnswer += 1;
                if (wordcolor[2][i] != color[j]) {
                    wordcolor[0][i].style.backgroundColor = 'white';
                    colTrueAnswer -= 1;
                    selekt = false;
                }
            }
        }
    }

    return colTrueAnswer;
}

function clickProvColorWordNew() {
    for (var i = 0; i < this.lenght; i++) {
        this.wordcolor[2][i] = undefined;
        colorWhite(i);
    }
    console.log("Отчситка полей для задачи с цветами выполнена");
}

function trueAnswerColor() {
    var oneColor = true;
    if (globalFlagOnload) {
        var color = [];
        for (var j = 1; j <= numberKoren; j++) {
            for (var i = 0; i < lenght; i++) {
                if (wordcolor[1][i] == j) {
                    if (oneColor) {
                        color[j] = colorBD[j];
                        oneColor = false;
                    }
                }
            }
            oneColor = true;
        }
        for (var j = 1; j <= numberKoren; j++) {
            for (var i = 0; i < lenght; i++) {
                if (wordcolor[1][i] == j) {
                    wordcolor[0][i].style.backgroundColor = color[j];
                }
            }
        }
    }
    
}