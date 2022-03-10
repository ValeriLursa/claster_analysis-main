function equal_arrays(mas1, mas2){
    if (mas1.length != mas2.length ) return 1;
    if (mas1.length + mas2.length == 0) return 0;
    if (mas1[0] != mas2[0]) return 1;
        else return equal_arrays(mas1.splice(1), mas2.splice(1));
}

function equal_arrays_test(){
    document.write("Тестирование функции equal_arrays<br>")
    mas1 = [1, 2, 3]
    mas2 = [1, 2, 3]
    if (equal_arrays(mas1, mas2) == 0) mess(1, "true"); else mess(1, "false");
    mas1 = []
    mas2 = []
    if (equal_arrays(mas1, mas2) == 0) mess(2, "true"); else mess(1, "false");
    mas1 = []
    mas2 = [1]
    if (equal_arrays(mas1, mas2) == 1) mess(3, "true"); else mess(1, "false");
    mas1 = [2, 2, 3]
    mas2 = [1, 2, 3]
    if (equal_arrays(mas1, mas2) == 1) mess(4, "true"); else mess(1, "false");
}