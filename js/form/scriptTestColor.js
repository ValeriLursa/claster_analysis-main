//задание с группированием слов
var colorBD = ["white", "rgb(143, 188, 143)", "rgb(205,205,94)", "rgb(255, 205, 94)", "rgb(180,255,87)", "rgb(255,205,152)", "rgb(0,255,148)", "rgb(255,205,205)", "rgb(67,255,203)", "rgb(222,154,154)", "rgb(126, 205, 205)", "rgb(222,154,207)", "rgb(154,154,207)", "rgb(205,205,255)"];
var flag = 1;
var resultColor = [];
var resultClusteringColor = [];
var numberEndTryColor = 0;
var lenColor = 0;

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
    var printBlock = document.getElementById("printColor");
    //var pElement = document.createElement("tr");
    resultColor.push(clickProvColorWord())
    if (resultColor[numberEndTryColor] == -1) {
        resultColor.pop();
        numberEndTryColor--;
        printBlock.innerHTML = "Все поля должны быть закрашены"
    }
    else {
        //кластеризация
	    var rezultq = clustering([resultColor[numberEndTryColor]], lenColor);
        //добавление резльтата кластеризации
	    resultClusteringColor.push(rezultq)
        //отметка правильности выполнения задания
	    if (rezultq == "Плохо") document.getElementById("color").className = "w3-bar-item w3-button tablink w3-red";
	    if (rezultq == "Средне") document.getElementById("color").className = "w3-bar-item w3-button tablink w3-yellow";
	    if (rezultq == "Хорошо") document.getElementById("color").className = "w3-bar-item w3-button tablink w3-green";
        var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
        var len = resultColor.length; 
        for (var i = 0; i < len; i++){
            strColorWord += "<tr> <td>"
            strColorWord += (i + 1).toString() + "</td>"
            strColorWord += "<td>" + resultColor[i].toString() + "</td>"
            strColorWord += "<td>" + resultClusteringColor[i].toString() + "</td>"
        }
        //pElement.innerHTML = str + "</tr>"
        //printBlock.appendChild(pElement);
        printBlock.innerHTML = strColorWord
    }
    numberEndTryColor++
}

function clickProvColorWord() { 
    lenColor = this.lenght
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
                        if ((color[j] == color[jj]) || (color[j] == 'white')) flagColor = false;
                    }
                    if (flagColor) {
                        color[j] = wordcolor[2][i];
                        oneColor = false;
                        wordcolor[0][i].className = 'td_3'
                    }
                    else {
                        wordcolor[0][i].style.backgroundColor = 'white';
                        wordcolor[0][i].className = 'border_table td_3';
                        selekt = false;
                        return -1;
                    }
                }
            }
        }
        flagColor = true;
        oneColor = true;
    }

    var colTrueAnswer = 16;
    for (var j = 1; j <= numberKoren; j++) {
        for (var i = 0; i < lenght; i++) {
            if (wordcolor[1][i] == j) {
                if (wordcolor[2][i] != color[j]) {
                    wordcolor[0][i].style.backgroundColor = 'white';
                    wordcolor[0][i].className = 'border_table td_3';
                    colTrueAnswer--;
                    selekt = false;
                }
                else {
                    wordcolor[0][i].className = 'td_3'
                }
            }
        }
    }

    return colTrueAnswer;
}

function clickProvColorWordNew() {
    for (var i = 0; i < this.lenght; i++) {
        this.wordcolor[2][i] = undefined;
        wordcolor[0][i].className = 'td_3'
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
                    wordcolor[0][i].className = 'td_3'
                }
            }
        }
    }
    
}