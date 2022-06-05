var resultCourse = 0;
var resultClusteringCourse = [];
var resultCourse2 = [];
var flagOneColor = false;
var resSum = 46;
var resultJSON = []

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
        resultJSON.push({"id": number, "result" : 0,"hint" : "Не пройдено"});
    }
    else {
        resultCourse2.push([number, masRes, masClast])
        resultCourse += Number(masRes)
        resultJSON.push({"id": number, "result" : masRes,"hint" : masClast});
    }
}

async function result(){
    var printBlock = document.getElementById("result");
    var strColorWord = "<tr><td class='td_3'>Номер задания</td><td class='td_3'>Результат</td><td class='td_3'>Подсказка</td></tr>"
    resultCourse = 0;
    checkResult(2, resultProvColor.result[resultProvColor.id.length-1], resultProvColor.resultClustering[resultProvColor.id.length-1])
    //console.log(resultSuchArray[0].result[resultSuchArray[s].id.length-1], resultSuchArray[0].resultClustering[resultSuchArray[s].id.length-1])
    checkResult(4, resultSuchArray[0].result[resultSuchArray[0].id.length-1], resultSuchArray[0].resultClustering[resultSuchArray[0].id.length-1])
    checkResult(5, resultMasArray[0].result[resultMasArray[0].id.length-1], resultMasArray[0].resultClustering[resultMasArray[0].id.length-1])
    checkResult(6, resultSelectArray[0].result[resultSelectArray[0].id.length-1], resultSelectArray[0].resultClustering[resultSelectArray[0].id.length-1])
    checkResult(7, resultMasArray[1].result[resultMasArray[1].id.length-1], resultMasArray[1].resultClustering[resultMasArray[1].id.length-1])
    checkResult(8, resultMasArray[2].result[resultMasArray[2].id.length-1], resultMasArray[2].resultClustering[resultMasArray[2].id.length-1])
    checkResult(9, resultMasArray[3].result[resultMasArray[3].id.length-1], resultMasArray[3].resultClustering[resultMasArray[3].id.length-1])
    var len = numTextZad; 
    var sr;
    if (resultCourse != 46) sr = "Еще остались ошибки. Сделай еще раз"
    //else sr = clustering([resultCourse], resSum);
    else sr = "Переходи к следующей теме"
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
    //fgetAttempt(test)
    //selectUser()
    
    const deleteId = {}
    deleteId.id = 1
    //deleteAttempt(deleteId)
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

async function saveData(){
    resultJSON.length = 0;
    await result()
    fetch('/attempt')
    .then(response => response.json())
    .then(responseText => {
        var maxId = 0;
        responseText.forEach(t => (t.id > maxId) ? maxId = t.id : 0)
        const postAttempt = {}
        postAttempt.id = ++maxId
        postAttempt.idUser = 1
        postAttempt.idTheme = 1
        postAttempt.result = resultJSON
        fetch('/attempt', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(postAttempt)
        })
        .then(response => response.text())
        .then(responseText => {
            console.log(responseText)
            resultJSON.length = 0;
            alert("Данные сохранены")
        })  
    });
}