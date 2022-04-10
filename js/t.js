var a = [];

function t(chars, from = 0, to = 0){
    var cnt = chars.length
    if ((from == 0) && (to == 0))
    {
        from = 1
        to = cnt
    }
    if (from == 0) from = 1
    if (to == 0) to = from
    if (from < to){
        plac = []
        for (var num = from; num <= to; num++){
            plac = plac.push(t(["A","B","C","D"], num))
        }
    }
    else{
        plac = []
        for (n = 0; n < from; n++){
            plac_old = plac
            plac = []
            plac_old.forEach(item => {
                last = strlen(item) - 1
                for (m = n; m < cnt; m++){
                    if (chars[m] > item[last]){
                        plac.push(item.chars[m])
                    }
                }
            });
        }
    }
    return plac
}

//console.log(t(["A","B","C","D"]))