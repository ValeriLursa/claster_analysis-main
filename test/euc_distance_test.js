//Требуемые файлы: js/euc_distance.js, mess.js

function euc_distance_test(){
    document.write("Тестирование функции euc_distance<br>")
    x = []
    max = 100
    min = 0
    m = max
    while (m > min){
        xm = [m, 0 , 0]
        x.push(xm)
        xm = [m, 5, 5]
        x.push(xm)
        xm = [m, 10, 10]
        x.push(xm)
        m -= 6        
    }
    rez = [25.11, 25.00, 25.11, 23.12, 23.00,
        23.12, 21.13, 21.00, 21.13, 19.15,
        19.00, 19.15, 17.16, 17.00, 17.16,
        15.18, 15.00, 15.18, 13.21, 13.00,
        13.21, 11.25, 11.00, 11.25, 9.30,
        9.00, 9.30, 7.39, 7.00, 7.39,
        5.53, 5.00, 5.53, 3.82, 3.00,
        3.82, 2.56, 1.00, 2.56, 2.56,
        1.00, 2.56, 3.82, 3.00, 3.82,
        5.53, 5.00, 5.53, 7.39, 7.00, 7.39
        ]
    mas_klaster = [25, 5, 5]
    for (let i=0;i<x.length;i++)
    {
        r = euc_distance(mas_klaster, x[i], 0)
        if (r == rez[i]) mess(i + 1, "true");
        else {
            mess(i + 1, "false");
            console.log(r)
            console.log(rez[i])
        }
    }
}

euc_distance_test()