class Clustering{
    
    object_rationing(x, max, min){
    
        return Number((-1.0 + ((x - min)/(max - min))*2.0).toFixed(2));
    }
    //Расчет эталонных значений
    getXk(col){
        var q = 0.1 //10% для отлично, 10% для средне, 80% плохо
        var Xk_var = []
        if (col < 3){
            //если только одно поле для проверки, то два кластера
            Xk_var.push([1])
            Xk_var.push([0])
        }
        if (col == 3){
            Xk_var.push([3])
            Xk_var.push([2])
            Xk_var.push([1])
        }
        if (col > 3) {
            //если больше одного, три кластера
            var qq = col - (col*q/2) //центр первого кластера, положительного
            var qn = col / 6
            Xk_var.push([Math.floor(qq)])
            col -= col*q //меняю верхнюю границу
            qq = col - (col*q/2) //центра второго кластера, среднего
            qn += (col/3)
            Xk_var.push([Math.floor(qq)])
            col -= col*q //меняю верхнюю границу
            qq = col - (col/2) //центр третьего кластера, плохого
            qn += (col/3)
            Xk_var.push([qq])
        }
        return Xk_var
    }

    //finding the maximum in a two-dimensional array
    max(X){
        var max_mass = [];
        for (let i=0; i< X.length; i++){
            max_mass.push(Math.max.apply(null, X[i]))
        }
        return Math.max.apply(null, max_mass)
    }

    //finding the minimum in a two-dimensional array
    min(X){
        var max_mass = [];
        for (let i=0; i< X.length; i++){
            max_mass.push(Math.min.apply(null, X[i]))
        }
        return Math.min.apply(null, max_mass)
    }

    //Ввод: двумерная матрица исходных значений, максимум, минимум, пустой массив
    //Вывод: двумерная матрица с нормированными значениями
    norm_Xk(Xk_var, max, min, norm_Xk){
        var len_Xk_var = Xk_var.length
        for (let i = 0; i< len_Xk_var; i++)
        {
            norm_Xk.push(this.norm_x(Xk_var[i], max, min, []));
        }
        return norm_Xk;
    }

    //вход: одномерный массив, int, int, одномерный массив
    //выход: одномерный массив
    norm_x(mas, max, min, rez){
        var q;
        for (let i = 0; i<mas.length; i++){
            q = this.object_rationing(mas[i], max, min)
            rez.push(q);
        }
        return rez;
    }

    //Ввод: матрица кластера, матрица объекта, пустая переменная типа float
    //Вывод: расстояние между кластером и объектом типа float
    euc_distance(mas_klaster, mas_x, rez){
        var m = mas_klaster.length;
        var q;
        for (let i=0;i<m;i++)
        {
            q = (mas_klaster[i] - mas_x[i])**2
            rez += q
        }
        rez = Math.sqrt(rez) * (1/m);
        return Number(rez.toFixed(2));
    }

    //входные данные: массив с вероятностью пренодлежности объекта к каждому классу
    //вызодные данные: номер класса integer
    klaster(mas){
        var min_mas = Math.min.apply(null, mas);
        for (let i=0;i<mas.length;i++)
        {
            if (mas[i] == min_mas) return i+1
        }
    }

    messageClustering(col, clust){
        if (col == 1){
            switch(clust){
                case 1: return "Переходи к следующему заданию"
                case 2: return "Еще остались ошибки. Сделай еще раз"
            }
        }
        else{
            switch(clust){
                case 1: return "Переходи к следующему заданию"
                case 2: return "Лучше сделать задание еще раз"
                case 3: return "Еще остались ошибки. Сделай еще раз"
            }
        }
    }
}