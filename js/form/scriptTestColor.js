//задание с группированием слов
var colorBD = ["white", "rgb(143, 188, 143)", "rgb(205,205,94)", "rgb(255, 205, 94)", "rgb(180,255,87)", "rgb(255,205,152)", "rgb(0,255,148)", "rgb(255,205,205)", "rgb(67,255,203)", "rgb(222,154,154)", "rgb(126, 205, 205)", "rgb(222,154,207)", "rgb(154,154,207)", "rgb(205,205,255)"];
var flag = 1;
var resultColor = [];
var resultClusteringColor = [];
var numberEndTryColor = 0;
var lenColor = 0;
var colFalse = 0;

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
	    if (rezultq == "Еще остались ошибки. Сделай еще раз") {
            document.getElementById("color").className = "w3-bar-item w3-button tablink w3-red";
            colFalse++;
        }
	    if (rezultq == "Лучше сделать задание еще раз") {
            document.getElementById("color").className = "w3-bar-item w3-button tablink w3-yellow";
        }
	    if (rezultq == "Переходи к следующему заданию") {
            document.getElementById("color").className = "w3-bar-item w3-button tablink w3-green";
            rootTrueColor();
        }
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
        if (colFalse == 2) rootColor(0, 5)
        if (colFalse > 2) rootColor(0, 15)
    }
    numberEndTryColor++
}

//Задача первых слов нужными цветами 
function startColor(){
    for (var j = 0; j < numberKoren; j++){
        var s = "word" + j;
        document.getElementById(s).style.backgroundColor = colorBD[j+1]
    }
}

function rootColor(start, end){
    for (var i = start; i <= end; i++){
        var s = "word" + i
        var word = document.getElementById(s)
        if ((0 <= i) && (i <= 5)) {
            word.innerHTML = rootArray[i]
        }
        else 
            if (word.style.backgroundColor == 'white') {
                word.innerHTML = rootArray[i]
            }
            else word.innerHTML = startWordColor[i]
    }
}

function rootTrueColor(){
    for (var i = 0; i < this.lenght; i++){
        var s = "word" + i
        var word = document.getElementById(s)
        word.innerHTML = startWordColor[i]
    }
    colFalse = 0;
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
                        wordcolor[0][i].className = 'td_3 button'
                    }
                    else {
                        wordcolor[0][i].style.backgroundColor = 'white';
                        wordcolor[0][i].className = 'border_table td_3 button';
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
                    wordcolor[0][i].className = 'border_table td_3 button';
                    colTrueAnswer--;
                    selekt = false;
                }
                else {
                    wordcolor[0][i].className = 'td_3 button'
                }
            }
        }
    }

    return colTrueAnswer;
}

function clickProvColorWordNew() {
    for (var i = 6; i < this.lenght; i++) {
        this.wordcolor[2][i] = undefined;
        wordcolor[0][i].className = 'td_3 button'
        colorWhite(i);
    }
    for (var i = 0; i< this.lenght; i++){
        var s = "word" + i
        var word = document.getElementById(s)
        word.innerHTML = startWordColor[i]
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
                    wordcolor[0][i].className = 'td_3 button'
                }
            }
        }
    }
    
}