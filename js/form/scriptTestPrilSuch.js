function clickProvPrilSuch(masPolz, masVhod) {
	var selekt = false;
	var flag = true;
	for (var i = 0; i < masPolz.length; i++) {
		if (masPolz[i].value[masPolz[i].value.length - 1] == ' ') masPolz[i].value = masPolz[i].value.substring(0, masPolz[i].value.length - 1);
		masPolz[i].value.toLowerCase();
	}

	for (var i = 0; i < masVhod.length; i++) {

		selekt = false;
		for (var j = 0; j < masVhod[0].length; j++)
			if (masPolz[i].value == masVhod[i][j]) {

				selekt = true;
			}

		if (!selekt) {
			masPolz[i].value = ""; flag = false;
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