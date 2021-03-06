//функция хранения двумерного массива
//Входные данные: номер массива, integer
//Выходные данные: двумерный массив

function d_array(i){
    switch(i){
        case 0:
            mas = [[82, 67, 52],
                    [40, 11,83],
                    [65, 55, 76]];
            return mas;
        case 1:
            mas =
                [[92, 5, 85],
                [40,62,60]];
            return mas;
        case 2:
            mas =
                [[81, 47, 13],
                [16, 49, 80],
                [83, 47, 62],
                [38, 84, 42]];
            return mas;
        case 3:
            mas = 
                [[57, 76, 36, 75],
                [71, 32, 30, 42],
                [52, 26, 9, 44],
                [4,	15,	9,	49],
                [65, 25, 95, 87]];
            return mas;
        case 4:
            mas = 
                [[80, 22, 23],
                [83, 70, 13]];
            return mas;
        case 5:
            mas = 
                [[101,	82,	31,	28,	16],
                [38,	32,	97,	21,	30],
            [83,	87,	57,	29,	19],
            [12,	5,	49,	45,	75]];
            return mas;
        case 6:
            mas = 
                [[60,	2,	6,	12],
            [14,	50,	55,	90],
            [14,	23,	49,	11],
            [30,	90,	11,	95],
            [93,	45,	8,	6]];
            return mas;
        case 7:
            mas = 
            [[34,	35,	90,	81],
            [27,	25,	80,	90],
            [13,	58,	71,	77],
            [38,	14,	47,	57]];
            return mas;
        case 8:
            mas = 
            [[37,	82,	92,	89,	39],
            [17,	15,	25,	84,	66]];
            return mas;
        case 9:
            mas = 
            [[38,	75,	68],
            [14,	78,	50],
            [52,	80,	52]];
            return mas;
        }
}

function d_array_norm(i){
    switch(i){
        case 0:
            mas = 
            [[0.97,	0.56,	0.14],
            [-0.19,	-1,	1],
            [0.5,	0.22,	0.81]];
            return mas;
        case 1:
            mas = 
            [[1,	-1,	0.84],
            [-0.2,	0.31,	0.26]];
            return mas;
        case 2:
            mas = 
            [[0.92,	-0.04,	-1],
                [-0.92,	0.01,	0.89],
                [0.97,	-0.04,	0.38],
                [-0.3,	1,	-0.18]];
                return mas;
        case 3:
            mas = 
                [[0.16,	0.58,	-0.3,	0.56],
                    [0.47,	-0.38,	-0.43,	-0.16],
                    [0.05,	-0.52,	-0.89,	-0.12],
                    [-1,	-0.76,	-0.89, -0.01],
                    [0.34,	-0.54,	1,	0.82]];
                    return mas;
        case 4:
            mas = 
                [[0.91,	-0.74,	-0.71],
                   [1,	0.63,	-1]]
                   return mas;
        case 5:
            mas =
                [[1,	0.6,	-0.46,	-0.52,	-0.77],
                    [-0.31,	-0.44,	0.92,-0.67,	-0.48],
                    [0.63,	0.71,	0.08,	-0.5,	-0.71],
                    [-0.85,	-1,	-0.08,	-0.17,	0.46]]
                    return mas;
        case 6:
            mas =
                [[0.25,	-1,	-0.91,	-0.78],
                    [-0.74,	0.03,	0.14,	0.89],
                    [-0.74,	-0.55,	0.01,	-0.81],
                    [-0.4,	0.89,	-0.81,	1],
                   [0.96,	-0.08,	-0.87,	-0.91]]
                   return mas;
        case 7:
            mas = 
                [[-0.45,	-0.43,	1,	0.77],
                    [-0.64,	-0.69,	0.74,	1],
                    [-1,	0.17,	0.51,	0.66],
                    [-0.35,	-0.97,	-0.12,	0.14]]
                    return mas;
        case 8:
            mas = 
                [[-0.43,	0.74,	1,	0.92,	-0.38],
                    [-0.95,	-1,	-0.74,	0.79,	0.32]]
                    return mas;
        case 9:
            mas = 
                [[-0.27,	0.85,	0.64],
                [-1,	0.94,	0.09],
                [0.15,	1,	0.15]]
                return mas;
    }
}
