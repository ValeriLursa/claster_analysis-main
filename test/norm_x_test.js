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

function norm_x_test(){
    document.write("Тестирование функции norm_x<br>")
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
    rez = [[1, -1, -1],
        [1, -0.9, -0.9],
        [1, -0.8, -0.8],
        [0.88, -1, -1],
        [0.88, -0.9, -0.9],
        [0.88, -0.8, -0.8],
        [0.76, -1, -1],
        [0.76, -0.9, -0.9],
        [0.76, -0.8, -0.8],
        [0.64, -1, -1],
        [0.64, -0.9, -0.9],
        [0.64, -0.8, -0.8],
        [0.52, -1, -1],
        [0.52, -0.9, -0.9],
        [0.52, -0.8, -0.8],
        [0.4, -1, -1],
        [0.4, -0.9, -0.9],
        [0.4, -0.8, -0.8],
        [0.28, -1, -1],
        [0.28, -0.9, -0.9],
        [0.28, -0.8, -0.8],
        [0.16, -1, -1],
        [0.16, -0.9, -0.9],
        [0.16, -0.8, -0.8],
        [0.04, -1, -1],
        [0.04, -0.9, -0.9],
        [0.04, -0.8, -0.8],
        [-0.08, -1, -1],
        [-0.08, -0.9, -0.9],
        [-0.08, -0.8, -0.8],
        [-0.2, -1, -1],
        [-0.2, -0.9, -0.9],
        [-0.2, -0.8, -0.8],
        [-0.32, -1, -1],
        [-0.32, -0.9, -0.9],
        [-0.32, -0.8, -0.8],
        [-0.44, -1, -1],
        [-0.44, -0.9, -0.9],
        [-0.44, -0.8, -0.8],
        [-0.56, -1, -1],
        [-0.56, -0.9, -0.9],
        [-0.56, -0.8, -0.8],
        [-0.68, -1, -1],
        [-0.68, -0.9, -0.9],
        [-0.68, -0.8, -0.8],
        [-0.8, -1, -1],
        [-0.8, -0.9, -0.9],
        [-0.8, -0.8, -0.8],
        [-0.92, -1, -1],
        [-0.92, -0.9, -0.9],
        [-0.92, -0.8, -0.8],]
    for (let i = 0;i<x.length; i++){
        r = norm_x(x[i], max, min, [])
        if (equal_arrays(r, rez[i]) == 0) mess(i + 1, "true");
        else {
            mess(i + 1, "false");
            console.log(r)
            console.log(rez[i])
        }
    }
}

norm_x_test()