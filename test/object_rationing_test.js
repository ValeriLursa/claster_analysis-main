//Требуются файлы object_rationing.js, test/mess.js

function object_rationing_test(){
    document.write("Тестирование функции object_rationing<br>")
    x = []
    max = []
    min = []
    m = 100
    while (m > 0){
        x.push(m)
        max.push(100)
        min.push(0)
        m -= 6
    }
    rez = [1, 0.88, 0.76, 0.64, 0.52, 0.4, 0.28, 0.16, 0.04, -0.08, -0.2, -0.32, -0.44, -0.56, -0.68, -0.8, -0.92]
    for (let i = 0;i<x.length; i++){
        r = object_rationing(x[i], max[i], min[i])
        if (r == rez[i]) mess(i + 1, "true"); else mess(i + 1, "false");
    }
}

object_rationing_test()