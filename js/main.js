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
    //поиск максимум минимум
    var max_var = max(Xk_var)
    var min_var = min(Xk_var)
    //нормализация центров кластеров
        //на выходе двумерная матрица
    var norm_Xk_var = norm_Xk(Xk_var, max_var, min_var, [])
    write_mas("Нормированные эталонные значения:<br>", norm_Xk_var)
    //ввод данных об успеваемости
        //одномерный массив успеваемости одного студента по всем параметрам
    var flag_x = 0;
    var x_var;
    if (flag_x == 0){
        x_var = x([]);
        write_mas("Входные значения:<br>", x_var);
    }
    //нормализация
    var norm_x_var = norm_x(x_var[0], max_var, min_var, [])
    document.write("Нормированные значения:<br>", norm_x_var,'<br>')
    //расстояние
    var euc_dist_var = []
    for (let i=0;i<norm_Xk_var.length;i++){
        euc_dist_var.push(euc_distance(norm_Xk_var[i], norm_x_var, 0))
    }
    //определение класса
    q = klaster(euc_dist_var)
    document.write("Принадлежность к классу: ", q)
    document.write('<br>')
}

console.log("File main.js included")
main()