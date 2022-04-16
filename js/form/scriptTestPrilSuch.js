var resultSuch = [];
var resultClusteringSuch = [];
var numberEndTrySuch = [];

function checkProvPrilSuch(s){
	//проверка задания с кратким ответом
	numberEndTrySuch[s]++;
	var str = "srav" + s;
	var ss = "such" + s;
	var wordProv = document.getElementsByClassName(ss);
	len = wordProv.length
	//проверка задания
	resultSuch[s].push([clickProvPrilSuch(wordProv, masShortAnswer[s])])
	//кластеризация
	var rezultq = clustering(resultSuch[s][numberEndTrySuch[s] - 1], len);
	//добавление резльтата кластеризации
	resultClusteringSuch[s].push(rezultq)
	if (rezultq == "Еще остались ошибки. Сделай еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-red";
	if (rezultq == "Лучше сделать задание еще раз") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-yellow";
	if (rezultq == "Переходи к следующему заданию") document.getElementById(str).className = "w3-bar-item w3-button tablink w3-green";
	//Вывод резльтатов всех попыток
	var print = "printSuch" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	var len = resultSuch[s].length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += (i+1).toString() + "</td>"
		strColorWord += "<td>" + resultSuch[s][i][0].toString() + "</td>"
		strColorWord += "<td>" + resultClusteringSuch[s][i].toString() + "</td>"
	}
	printBlock.innerHTML = strColorWord
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