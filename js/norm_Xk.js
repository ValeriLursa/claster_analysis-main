function norm_Xk(Xk_var, max, min, norm_Xk){
    var m = [];
    for (let i = 0; i<Xk_var.length; i++){
        norm_Xk = get(norm_Xk, m);
        for (let j = 0; j<Xk_var[i].length; j++){
            norm_Xk[i][j] = object_rationing(Xk_var[i][j], max, min);
        }
        //console.log(m)
        
        console.log(norm_Xk)
        //console.log(m.join(' '))
        m.splice(0, m.length);
    }
    return norm_Xk;
}

console.log("File norm_Xk.js included")