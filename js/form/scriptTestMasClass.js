class resultMas extends ScriptTest{

};
var resultMasArray = [];
var resultClusteringMas = [];

function checkMasClass(s){
    //проверка заданий с развернутым ответом
    str = "prov" + s;
    ss = "question" + s;
    var wordProv = document.getElementsByClassName(ss);
    var len = wordProv.length
    //проверка задания
    resultMasArray[s].addId(resultMasArray[s].id.length + 1)
	resultMasArray[s].addResult(provMasClass(wordProv, s))
    //кластеризация
	var rezultq = clusteringM([resultMasArray[s].result[resultMasArray[s].id.length - 1]], len);
	//добавление резльтата кластеризации
	resultMasArray[s].addResultClustering(rezultq)
    //отметка правильности выполнения задания
	writeButtonMas(rezultq, str)
    //Вывод резльтатов всех попыток
	var print = "printQuestion" + s
	var printBlock = document.getElementById(print);
	printBlock.innerHTML = writeTableMas(s)
}

function provMasClass(array, s) {
    var flag = array.length;
    for (var i = 0; i < array.length; i++) {
        if (array[i].value != masDetailedAnswer[s][i]) flag--;
    }
    return flag;
}

function writeButtonMas(rezultq, str){
    if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-green";
}

function writeTableMas(s){
    var strColorWord = "<tr><td class='td_3'>Номер попытки</td><td class='td_3'>Результат</td><td class='td_3'>Подсказка</td></tr>"
	len = resultMasArray[s].result.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td class='td_3'>"
		strColorWord += resultMasArray[s].id[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultMasArray[s].result[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultMasArray[s].resultClustering[i] + "</td>"
	}
    return strColorWord
}

async function returnLastTryMas(s){
	//вывод предыдущей попытки
	await fetch('/attempt')
    .then(response => response.json())
    .then(responseText => {
        var len = responseText.length
		if (len != 0){
            var index = ind(s)
			var q = responseText[len-1].result[index].hint
			if (q != 'Не пройдено'){
				resultMasArray[s].addId("-")
				resultMasArray[s].addResult(responseText[len-1].result[index].result)
				resultMasArray[s].addResultClustering(q)
				var printBlock = document.getElementById("printQuestion"+s);
				printBlock.innerHTML = writeTableMas(s)
				writeButtonMas(q, "prov" + s)
			}
		}
    });
}
function ind(s){
    switch(s){
        case 0: return 2;
        case 1: return 4;
        case 2: return 5;
        case 3: return 6;
    }
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