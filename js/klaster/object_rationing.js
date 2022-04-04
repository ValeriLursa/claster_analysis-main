function object_rationing(x, max, min){
    
    return Number((-1.0 + ((x - min)/(max - min))*2.0).toFixed(2));
}