//требуемые файлы: klaster.js, test/mess.js

function klaster_test(){
    document.write("Тестирование функции klaster<br>");
    rez = [[3, 2, 2],
            [2, 1],
            [3, 1, 2, 1],
            [3, 3, 3, 1, 2],
            [2, 3],
            [5, 4, 5, 2],
            [2, 1,4,3,4],
            [1, 2,1,2],
            [1, 2],
            [1, 1, 1]]
    test_number = 1;
            for (let i = 0; i<10;i++){
        mas = d_array_norm(i)
        for (let j=0;j<mas.length;j++){
            q = klaster(mas[j])
            if (q == rez[i][j]) mess(test_number, true)
                else mess(test_number, false)
            test_number++
        }
    }
}

klaster_test()