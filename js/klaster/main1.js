function clusteringM(result, col){
    var clust = new Clustering();
    //Расчет эталонных значений
    var Xk_var = clust.getXk(col)
    //Просчет макс мин
    var max_var = clust.max(Xk_var)
    var min_var = clust.min(Xk_var)
    //нормализация эталонных данных
    var norm_Xk_var = clust.norm_Xk(Xk_var, max_var, min_var, [])
    //нормализация
    var norm_x_var = clust.norm_x(result, max_var, min_var, [])
    //расстояние
    var euc_dist_var = []
    for (let i=0;i<norm_Xk_var.length;i++){
        euc_dist_var.push(clust.euc_distance(norm_Xk_var[i], norm_x_var, 0))
    }
    //определение класса
    var q = clust.klaster(euc_dist_var)
    //Сообщение
    var mes = clust.messageClustering(col, q)
    return mes
}

