//finding the maximum in a two-dimensional array
function max(X){
    var max_mass = [];
    for (let i=0; i< X.length; i++){
        max_mass.push(Math.max.apply(null, X[i]))
    }
    return Math.max.apply(null, max_mass)
}

//finding the minimum in a two-dimensional array
function min(X){
    var max_mass = [];
    for (let i=0; i< X.length; i++){
        max_mass.push(Math.min.apply(null, X[i]))
    }
    return Math.min.apply(null, max_mass)
}

console.log("File maxMin.js included")