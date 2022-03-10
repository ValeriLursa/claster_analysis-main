//Требуемыей файлы: norm_x.js

function norm_Xk(Xk_var, max, min, norm_Xk){
    len_Xk_var = Xk_var.length
    for (let i = 0; i< len_Xk_var; i++)
    {
        norm_Xk.push(norm_x(Xk_var[i], max, min, []));
    }
    return norm_Xk;
}

console.log("File norm_Xk.js included")