//Требуемые файлы Xk.js, 

function write_mas(title, mas){
    str = title + '<br>'
    
    if (typeof mas == "number"){
        str += mas + '<br>'
    }
    console.log(mas)
    if (mas instanceof Array) {
        var len_array = mas[0].length
        console.log(mas[0].length)
        if (typeof len_array === 'undefined')
        {
            //одномерный массив
            str += mas.join(' ') + '<br>'
        }
        else{
            //двумерный массив
            for (let i = 0; i<mas.length;i++){
                str += mas[i].join(' ') + '<br>'
            }
        }
    }
    return str + '<br>'
}

function main(){
    var str = ''
    //ввод эталонных данных
    var flag_Xk = 0 // 0 - из программы, 1 - из базы данных
    if (flag_Xk == 0){
        //функция передачи данных из программы
        var Xk_var = Xk([])
        str += write_mas("Эталонные значения:", Xk_var);
    }
    //поиск максимум минимум
    var max_var = max(Xk_var)
    var min_var = min(Xk_var)
    //нормализация центров кластеров
        //на выходе двумерная матрица
    var norm_Xk_var = norm_Xk(Xk_var, max_var, min_var, [])
    str += write_mas("Нормированные эталонные значения:", norm_Xk_var)
    //ввод данных об успеваемости
        //одномерный массив успеваемости одного студента по всем параметрам
    var flag_x = 0;
    var x_var;
    if (flag_x == 0){
        x_var = x([]);
        str += write_mas("Входные значения:", x_var);
    }
    //нормализация
    var norm_x_var = norm_x(x_var, max_var, min_var, [])
    str += write_mas("Нормированные значения:", norm_x_var)
    //расстояние
    var euc_dist_var = []
    for (let i=0;i<norm_Xk_var.length;i++){
        euc_dist_var.push(euc_distance(norm_Xk_var[i], norm_x_var, 0))
    }
    //определение класса
    q = klaster(euc_dist_var)
    str += write_mas("Принадлежность к классу: ", q)
    return str
}

console.log("File main.js included")
//main()