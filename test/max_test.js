//требуемые файлы maxMin.js, test/mess.js, test/d_array.js

function max_test(){
    document.write("Тестирование функции max<br>");
    rez = [83, 92, 84, 95, 83, 101, 95, 90, 92, 80];
    for (let i=0;i<10;i++){
        m = max(d_array(i))
        if (m == rez[i]) mess(i + 1, true);
         else {
            mess(i + 1, false);
            console.log(m)
        }
    }
}

function min_test(){
    document.write("Тестирование функции min<br>");
    rez = [11, 5, 13, 4, 13, 5, 2, 13, 15, 14];
    for (let i=0;i<10;i++){
        m = min(d_array(i))
        if (m == rez[i]) mess(i + 1, true);
         else {
            mess(i + 1, false);
            console.log(m)
        }
    }
}

min_test()

