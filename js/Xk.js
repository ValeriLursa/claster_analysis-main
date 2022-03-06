function get(Xk, mas){
    Xk.push(mas);
    return Xk;
}

function Xk(Xk_var){
    Xk_var = get(Xk_var, [100, 0, 0]);
    Xk_var = get(Xk_var, [74.5, 3, 3]);
    Xk_var = get(Xk_var, [25, 5, 5]);
    Xk_var = get(Xk_var, [0, 10, 10]);
    return Xk_var;
}

console.log("File Xk.js included")