var resultSelect = [];
var resultClusteringSelect = [];
var numberEndTry = [];

function checkSelect(s){
	//проверка заданий с селектами
	numberEndTry[s]++;
	var str = "sel" + s;
	var ss = "select" + s;
	var wordProv = document.getElementsByClassName(str);
	len = wordProv.length
	//проверка задания
	resultSelect[s].push([clickSelect(wordProv, masProvSelect[s])])
	//кластеризация
	var rezultq = clustering(resultSelect[s][numberEndTry[s] - 1], len);
	//добавление резльтата кластеризации
	resultClusteringSelect[s].push(rezultq)
	//отметка правильности выполнения задания
	if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-green";
	//Вывод резльтатов всех попыток
	var print = "printSelect" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	var len = resultSelect[s].length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += (i+1).toString() + "</td>"
		strColorWord += "<td>" + resultSelect[s][i][0].toString() + "</td>"
		strColorWord += "<td>" + resultClusteringSelect[s][i].toString() + "</td>"
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