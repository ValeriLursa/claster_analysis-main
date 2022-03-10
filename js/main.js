//Требуемые файлы Xk.js, 

function write_mas(title, mas){
    document.write(title)
    for (let i = 0; i<mas.length;i++){
        document.write(mas[i].join(' '))
        document.write("<br>")
    }
}

function main(){
    //ввод эталонных данных
    var flag_Xk = 0 // 0 - из программы, 1 - из базы данных
    if (flag_Xk == 0){
        //функция передачи данных из программы
        var Xk_var = Xk([])
        write_mas("Эталонные значения:<br>", Xk_var);
    }
    console.log(Xk_var)
    //поиск максимум минимум
    var max_var = max(Xk_var)
    var min_var = min(Xk_var)
    //нормализация центров кластеров
        //на выходе двумерная матрица
    var norm_Xk_var = norm_Xk(Xk_var, max_var, min_var, [])
    console.log(norm_Xk_var)
    write_mas("Нормированные эталонные значения:<br>", norm_Xk_var)
    //ввод данных об успеваемости
        //одномерный массив успеваемости одного сутдента по всем параметрам
    var flag_x = 0;
    if (flag_x == 0){
        var x_var = x([]);
    }
    //нормализация
    
    //расстояние

    //определение класса

    
}

console.log("File main.js included")
main()