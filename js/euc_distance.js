//Требуемый файлы: -
//Ввод: матрица кластера, матрица объекта, пустая переменная типа float
//Вывод: расстояние между кластером и объектом типа float

function euc_distance(mas_klaster, mas_x, rez){
    m = mas_klaster.length;
    for (let i=0;i<m;i++)
    {
        q = (mas_klaster[i] - mas_x[i])**2
        rez += q
    }
    rez = Math.sqrt(rez) * (1/m);
    return Number(rez.toFixed(2));
}

console.log("File euc_distance.js included")