class resultSuch extends ScriptTest {

};
var resultSuchArray = [];
var resultClusteringSuch = [];
var numberEndTrySuch = [];

function checkProvPrilSuch(s){
	//проверка задания с кратким ответом
	var str = "srav" + s;
	var ss = "such" + s;
	var wordProv = document.getElementsByClassName(ss);
	len = wordProv.length
	//проверка задания
	resultSuchArray[s].addId(resultSuchArray[s].id.length + 1)
	resultSuchArray[s].addResult(clickProvPrilSuch(wordProv, masShortAnswer[s]))
	//кластеризация
	var rezultq = clusteringM([resultSuchArray[s].result[resultSuchArray[s].id.length - 1]], len);
	//добавление резльтата кластеризации
	resultSuchArray[s].addResultClustering(rezultq)
	writeButtonSuch(rezultq, str)
	//Вывод резльтатов всех попыток
	var print = "printSuch" + s
	var printBlock = document.getElementById(print);
	printBlock.innerHTML = writeTableSuch(s)
}

function writeButtonSuch(rezultq, str){
	if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-green";
}

function writeTableSuch(s){
	var strColorWord = "<tr><td class='td_3'>Номер попытки</td><td class='td_3'>Результат</td><td class='td_3'>Подсказка</td></tr>"
	var len = resultSuchArray[s].result.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td class='td_3'>"
		strColorWord += resultSuchArray[s].id[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultSuchArray[s].result[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultSuchArray[s].resultClustering[i] + "</td>"
	}
	return strColorWord
}

async function returnLastTrySuch(s){
	//вывод предыдущей попытки
	await fetch('/attempt')
    .then(response => response.json())
    .then(responseText => {
        var len = responseText.length
		if (len != 0){
			var q = responseText[len-1].result[1].hint
			if (q != 'Не пройдено'){
				resultSuchArray[s].addId("-")
				resultSuchArray[s].addResult(responseText[len-1].result[1].result)
				resultSuchArray[s].addResultClustering(q)
				var printBlock = document.getElementById("printSuch"+s);
				printBlock.innerHTML = writeTableSuch(s)
				writeButtonSuch(q, "srav" + s)
			}
		}
    });
}

function clickProvPrilSuch(masPolz, masVhod) {
	var selekt = false;
	var flag = masPolz.length;
	for (var i = 0; i < masPolz.length; i++) {
		if ((masPolz[i].value != "") && (masPolz[i].value[masPolz[i].value.length - 1] == ' ')) masPolz[i].value = masPolz[i].value.substring(0, masPolz[i].value.length - 1);
		masPolz[i].value.toLowerCase();
	}
	
	for (var i = 0; i < masVhod.length; i++) {
		selekt = false;
		for (var j = 0; j < masVhod[i].length; j++)
			if (masPolz[i].value == masVhod[i][j]) {

				selekt = true;
			}

		if (!selekt) {
			masPolz[i].value = ""; flag--;
		}
	}
	return flag;
}


//почистка полей для нового выполнения

function clickProvPrilSuchMew(s) {
	var ss = "such" + s;
	var wordProv = document.getElementsByClassName(ss);
	for (var i = 0; i < wordProv.length; i++) {
		wordProv[i].value = "";
	}
}

function trueAnswerSrav(s) {
	var ss = "such" + s;
	var wordProv = document.getElementsByClassName(ss);
	for (var i = 0; i < wordProv.length; i++) {
		wordProv[i].value = masShortAnswer[s][i][0];
    }
}