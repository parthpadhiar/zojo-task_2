function solutions(A) {
    var minimalAvg = 100000;
    var result = 0;
    if(A.length <= 2){
        return 0;
    }
    // Here, we break array with A.length - 2 into 2 parts
    for (let i = 0; i < A.length - 2; i++) {
        // here if (A[i] + a[i + 1]) / 2 < minimalAvg i.e (4 + 2) / 2 = 3
        if ((A[i] + A[i + 1]) / 2 < minimalAvg) {
            // so now minimalAvg = 3 and save the position that is 0
            minimalAvg = (A[i] + A[i + 1]) / 2;
            result = i;            
        }
        // here if (A[i] + A[i + 1] + A[i + 2]) / 2 < minimalAvg i.e (4 + 2 + 2) / 3 = 2.666
        if ((A[i] + A[i + 1] + A[i + 2]) / 3 < minimalAvg) {
            // so now minimalAvg = 2.6666 and save the position that is 1
            minimalAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
            result = i;
        }
        //now array's second part A.length - 2
        var aMax = A.length - 2;
        // Here, (A[aMax] + A[aMax + 1]) / 2 < minimalAvg i.e  (5 + 8) / 2 = 6.5 !< 2.0
        if ((A[aMax] + A[aMax + 1]) / 2 < minimalAvg) {
            minimalAvg = (A[aMax] + A[aMax + 1]) / 2 ;
            result = aMax;
        }
    }
    // final result 1
    return result;
}

var A = [4, 2, 2, 5, 1, 5,8];
console.log(solutions(A));