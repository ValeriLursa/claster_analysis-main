var resultMas = [];
var numberEndTryMas = 0;

function checkMasClass(s){
    //проверка заданий с развернутым ответом
    numberEndTryMas++;
    str = "prov" + s;
    ss = "question" + s;
    var wordProv = document.getElementsByClassName(ss);
    len = wordProv.length
    //проверка задания
	resultMas.push([provMasClass(wordProv), numberEndTryMas])
    //кластеризация
	var rezultq = 0;
	//добавление резльтата кластеризации
	resultMas[numberEndTryMas - 1].push(rezultq)
    if (resultMas[numberEndTryMas - 1][0] != len) {
        document.getElementById(str).className += " w3-red";
    } else document.getElementById(str).className += " w3-green";
    //Вывод резльтатов всех попыток
	var print = "printQuestion" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	var len = resultMas.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += resultMas[i][1].toString() + "</td>"
		strColorWord += "<td>" + resultMas[i][0].toString() + "</td>"
		strColorWord += "<td>" + resultMas[i][2].toString() + "</td>"
	}
	printBlock.innerHTML = strColorWord
}

function provMasClass(array) {
    var flag = array.length;
    for (var i = 0; i < array.length; i++) {
        if (array[i].value == "") flag--;
    }
    return flag;
}

function trueAnswerDetailedAnswer(s) {
    ss = "question" + s;
    var wordsProv = document.getElementsByClassName(ss);
    for (var i = 0; i < wordsProv.length; i++) {
        wordsProv[i].value = masDetailedAnswer[s][i]; 
    }
}
function detailedAnswerNew(s) {
    ss = "question" + s;
    var wordsProv = document.getElementsByClassName(ss);
    for (var i = 0; i < wordsProv.length; i++) {
        wordsProv[i].value = "";
    }
}