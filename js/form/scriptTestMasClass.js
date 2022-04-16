var resultMas = [];
var resultClusteringMas = [];
var numberEndTryMas = [];

function checkMasClass(s){
    //проверка заданий с развернутым ответом
    numberEndTryMas[s]++;
    str = "prov" + s;
    ss = "question" + s;
    var wordProv = document.getElementsByClassName(ss);
    var len = wordProv.length
    //проверка задания
	resultMas[s].push([provMasClass(wordProv)])
    //кластеризация
	var rezultq = clustering(resultMas[s][numberEndTryMas[s] - 1], len);
	//добавление резльтата кластеризации
	resultClusteringMas[s].push(rezultq)
    //отметка правильности выполнения задания
	if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-green";
    //Вывод резльтатов всех попыток
	var print = "printQuestion" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	len = resultMas[s].length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += (i+1).toString() + "</td>"
		strColorWord += "<td>" + resultMas[s][i][0].toString() + "</td>"
		strColorWord += "<td>" + resultClusteringMas[s][i].toString() + "</td>"
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