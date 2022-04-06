var resultSuch = [];
var numberEndTrySuch = [];

function checkProvPrilSuch(s){
	//проверка задания с кратким ответом
	numberEndTrySuch++;
	var str = "srav" + s;
	var ss = "such" + s;
	var wordProv = document.getElementsByClassName(ss);
	len = wordProv.length
	//проверка задания
	resultSuch.push([clickProvPrilSuch(wordProv, masShortAnswer[s]), numberEndTrySuch])
	//кластеризация
	var rezultq = 0;
	//добавление резльтата кластеризации
	resultSuch[numberEndTrySuch - 1].push(rezultq)
	if (resultSuch[numberEndTrySuch - 1][0] != len) {
		document.getElementById(str).className += " w3-red";
	} else document.getElementById(str).className += " w3-green";
	//Вывод резльтатов всех попыток
	var print = "printSuch" + s
	var printBlock = document.getElementById(print);
	var strColorWord = "<tr><td>Номер попытки</td><td>Результат</td><td>Подсказка</td></tr>"
	var len = resultSuch.length; 
	for (var i = 0; i < len; i++){
		strColorWord += "<tr> <td>"
		strColorWord += resultSuch[i][1].toString() + "</td>"
		strColorWord += "<td>" + resultSuch[i][0].toString() + "</td>"
		strColorWord += "<td>" + resultSuch[i][2].toString() + "</td>"
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