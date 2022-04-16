var resultCourse = 0;
var resultClusteringCourse = [];
var resultCourse2 = [];
var flagOneColor = false;
var resSum = 46;

function proverka() {
    if (globalFlagOnload) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
            tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
        }
        
        

        
    }
}


function provColor(func, ev) {
    if (!func) {
        ev.className += " w3-red";
    } else ev.className += " w3-red";
}

function checkResult(number, masRes, masClast){
    if (masRes === undefined) {
        resultCourse2.push([number, 0, "Не пройдено"])
        resultCourse += 0
    }
    else {
        resultCourse2.push([number, masRes, masClast])
        resultCourse += Number(masRes)
    }
}

function result(){
    var printBlock = document.getElementById("result");
    var strColorWord = "<tr><td class='td_3'>Номер задания</td><td class='td_3'>Результат</td><td class='td_3'>Подсказка</td></tr>"
    resultCourse = 0;
    checkResult(2, resultColor[numberEndTryColor-1], resultClusteringColor[numberEndTryColor-1])
    checkResult(4, resultSuch[0][numberEndTrySuch[0]-1], resultClusteringSuch[0][numberEndTrySuch[0]-1])
    checkResult(5, resultMas[0][numberEndTryMas[0]-1], resultClusteringMas[0][numberEndTryMas[0]-1])
    checkResult(6, resultSelect[0][numberEndTry[0]-1], resultClusteringSelect[0][numberEndTry[0]-1])
    checkResult(7, resultMas[1][numberEndTryMas[1]-1], resultClusteringMas[1][numberEndTryMas[1]-1])
    checkResult(8, resultMas[2][numberEndTryMas[2]-1], resultClusteringMas[2][numberEndTryMas[2]-1])
    checkResult(9, resultMas[3][numberEndTryMas[3]-1], resultClusteringMas[3][numberEndTryMas[3]-1])
    var len = numTextZad; 
    var sr;
    if (resultCourse == 0) sr = "Еще остались ошибки. Сделай еще раз"
    else sr = clustering([resultCourse], resSum);
    console.log(sr)
    //var q = 
    //var len = 1;
    for (var i = 0; i < len; i++){
        strColorWord += "<tr>"
        for (var j = 0; j < 3; j++)
        {
            strColorWord += "<td class='td_3'>"
            strColorWord += resultCourse2[i][j] + "</td>"
        }
        strColorWord += "</tr>"
    }
    printBlock.innerHTML = strColorWord + "<p>" + sr + "<p>Сумма: " + resultCourse + " из " + resSum
    resultCourse2.length = 0;
}

function allAnswer(){
    trueAnswerColor()
    checkColorWord()
    //
    trueAnswerSrav(0)
    checkProvPrilSuch(0)
    //
    trueAnswerDetailedAnswer(0)
    checkMasClass(0)
    //
    trueAnswerSelect(0)
    checkSelect(0)
    //
    trueAnswerDetailedAnswer(1)
    checkMasClass(1)
    //
    trueAnswerDetailedAnswer(2)
    checkMasClass(2)
    //
    trueAnswerDetailedAnswer(3)
    checkMasClass(3)
    //
    result()
}