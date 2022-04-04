//Требуемые файлы: object_rationing.js
//вход: одномерный массив, int, int, одномерный массив
//выход: одномерный массив
function norm_x(mas, max, min, rez){
    for (let i = 0; i<mas.length; i++){
        q = object_rationing(mas[i], max, min)
        rez.push(q);
    }
    return rez;
}

console.log("File norm_x.js included")