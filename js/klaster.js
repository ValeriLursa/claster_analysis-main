//требуемые файлы: -
//входные данные: массив с вероятностью пренодлежности объекта к каждому классу
//вызодные данные: номер класса integer

function klaster(mas){
    min_mas = Math.min.apply(null, mas);
    for (let i=0;i<mas.length;i++)
    {
        if (mas[i] == min_mas) return i+1
    }
}

console.log("File klaster.js included")