//Требуемые файлы: object_rationing.js, norm_x.js, test/mess.js, test/equal_arrays.js, test/d_array.js
//Модульное тестирование нормирования двумерной матрицы

function norm_Xk_test(){
    max = [83, 92, 84, 95, 83, 101, 95, 90, 92, 80]
    min = [11, 5, 13, 4, 13, 5, 2, 13, 15, 14]
    for (let i = 0; i< 10;i++)
    {
        m = norm_Xk(d_array(i), max[i], min[i], [])
        len_m = m.length
        flag = 0;
        for (let j = 0; j < len_m; j++){
            if (equal_arrays(m[j], d_array_norm(i)[j]) != 0) 
            {
                flag = 1;
                console.log(i, j)
            }
        }
        if (flag == 0) mess(i + 1, "true"); else mess(i + 1, "false");
    }
}

norm_Xk_test()