//модульное тестирование check()
resultSelect = {
	id:[],
	resultS:[],
	resultClusteringSelect:[],
}

var resultTrue = 7

var resultSelectArray = []
resultSelectArray.push(resultSelect)

function clickSelect(result, resultTrue){
    return result
}

function check(s, result, len){
    resultSelectArray[s].resultS.push(clickSelect(result, resultTrue))
    var rezultq = clustering([resultSelectArray[s].resultS[0]], len);
    resultSelectArray[s].resultS.length = 0;
    console.log(rezultq)
    if (rezultq == "Еще остались ошибки. Сделай еще раз") return (rezultq, "w3-bar-item w3-button tablink w3-red")
	if (rezultq == "Лучше сделать задание еще раз") return (rezultq, "w3-bar-item w3-button tablink w3-yellow")
	if (rezultq == "Переходи к следующему заданию") return (rezultq, "w3-bar-item w3-button tablink w3-green")
}

function check_test(){
    document.write("Тестирование функции check()<br>")
    var q = check(0, 1, 1)
    if (q == ("Переходи к следующему заданию", "w3-bar-item w3-button tablink w3-green")) mess(1, "true"); else mess(1, "false");
    q = check(0, 0, 1)
    console.log(q)
    if (q == ("Еще остались ошибки. Сделай еще раз", "w3-bar-item w3-button tablink w3-red")) mess(2, "true"); else mess(2, "false");
    q = check(0, 7, 7)
    if (q == ("Переходи к следующему заданию", "w3-bar-item w3-button tablink w3-green")) mess(3, "true"); else mess(3, "false");
    q = check(0, 4, 7)
    if (q == ("Лучше сделать задание еще раз", "w3-bar-item w3-button tablink w3-yellow")) mess(4, "true"); else mess(4, "false");
    q = check(0, 3, 7)
    if (q == ("Еще остались ошибки. Сделай еще раз", "w3-bar-item w3-button tablink w3-red")) mess(5, "true"); else mess(5, "false");
}

//check_test()
var stract = {
    id:[],
    res:[],

}

class Str {
    id;
    res;
    constructor() {
        this.id = []
        this.res = []
    }
    add(id, res){
        this.id.push(id)
        this.res.push(res)
    }
}

var masStract = [];

function st(){
    var s = [];
    s.push(new Str())
    s.push(new Str())
    s[0].add(1,2)
    s[1].add(2, 1)
    s[1].add(3, 2)
    console.log(s)
    console.log(s[1].id[1])
}

st()
