resultSelect = {
	id:[],
	resultS:[],
	resultClusteringSelect:[],
}
var resultSelectArray = [];
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
	resultSelectArray[s].id.push(numberEndTry[s])
	resultSelectArray[s].resultS.push(clickSelect(wordProv, masProvSelect[s]))
	//кластеризация
	var rezultq = clustering([resultSelectArray[s].resultS[numberEndTry[s] - 1]], len);
	//добавление резльтата кластеризации
	resultSelectArray[s].resultClusteringSelect.push(rezultq)
	//отметка правильности выполнения задания
	if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(ss).className = "w3-bar-item w3-button tablink w3-green";
	//Вывод результатов всех попыток
	var print = "printSelect" + s
	var printBlock = document.getElementById(print);
	printBlock.innerHTML = writeTableSelect(s)
}

function writeTableSelect(s){
	var strColorWord = "<tr><td class='td_3'>Номер попытки</td><td class='td_3'>Результат</td><td class='td_3'>Подсказка</td></tr>"
	var len = resultSelectArray[s].resultS.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td class='td_3'>"
		strColorWord += resultSelectArray[s].id[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultSelectArray[s].resultS[i].toString() + "</td>"
		strColorWord += "<td class='td_3'>" + resultSelectArray[s].resultClusteringSelect[i] + "</td>"
	}
	return strColorWord
}


function selIndex(ii,masRez) {
	var selectStr = "<select size=\"1\" class=\"sel" + ii + "\"> <option>-</option>";
	for (var i = 0; i < masRez.length; i++) {
		selectStr += "<option>" + masRez[i] + "</option>";
	}
	selectStr += "</select>";
	return selectStr;
}

async function returnLastTry(s){
	//вывод предыдущей попытки
	await fetch('/attempt')
    .then(response => response.json())
    .then(responseText => {
        var len = responseText.length
		if (len != 0){
			var q = responseText[len-1].result[3].hint
			console.log(q)
			if (q != 'Не пройдено'){
				resultSelectArray[s].id.push("-")
				resultSelectArray[s].resultS.push(responseText[len-1].result[3].result)
				resultSelectArray[s].resultClusteringSelect.push(responseText[len-1].result[3].hint)
				var printBlock = document.getElementById("printSelect"+s);
				printBlock.innerHTML = writeTableSelect(s)
				numberEndTry[s]++;
			}
		}
    });
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