var resultCheck = [];
var resultClustering = [];
var numberEndTry = 0;

function checkSelect(s){
	//проверка заданий с селектами
	numberEndTry++;
	var str = "sel" + s;
	var ss = "select" + s;
	var wordProv = document.getElementsByClassName(str);
	len = wordProv.length
	//проверка задания
	resultCheck.push([clickSelect(wordProv, masProvSelect[s])])
	//кластеризация
	var rezultq = clustering(resultCheck[numberEndTry - 1], len);
	//добавление резльтата кластеризации
	resultClustering.push(rezultq)
	console.log(rezultq)
	//отметка правильности выполнения задания
	if (rezultq == "Плохо") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Средне") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Хорошо") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-green";
	//Вывод резльтатов всех попыток
	var print = "printSelect" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	var len = resultCheck.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += (i+1).toString() + "</td>"
		strColorWord += "<td>" + resultCheck[i][0].toString() + "</td>"
		strColorWord += "<td>" + resultClustering[i].toString() + "</td>"
	}
	printBlock.innerHTML = strColorWord
}


function selIndex(ii,masRez) {
	var selectStr = "<select size=\"1\" class=\"sel" + ii + "\"> <option>-</option>";
	for (var i = 0; i < masRez.length; i++) {
		selectStr += "<option>" + masRez[i] + "</option>";
	}
	selectStr += "</select>";
	return selectStr;
}

function clickSelect(array, masRez) {
	var selekt = array.length;
	for (var i = 0; i < array.length; i++) {
		if (array[i].options[array[i].selectedIndex].value != masRez[i]) {
			array[i].value = "-";
			selekt--;
		}
	}
	return selekt;
}

function clickSelectNew(s) {
	var str = "sel" + s;
	var wordProv = document.getElementsByClassName(str);
	for (var i = 0; i < wordProv.length; i++) {
		wordProv[i].value = "-";
	}
}

function trueAnswerSelect(s) {
	var str = "sel"+s;
	var wordProv = document.getElementsByClassName(str);
	for (var i = 0; i < wordProv.length; i++) {
		wordProv[i].value = masProvSelect[s][i];
    }
}