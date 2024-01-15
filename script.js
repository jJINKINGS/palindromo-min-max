function isPalindrome(str){
    let strNormal = str.replaceAll(" ","").toLowerCase();
    let strReversa = "";

    for(let i = strNormal.length - 1; i >= 0; i--) {
        strReversa += strNormal[i];
        if(strNormal === strReversa) {
            return true;
        }
    }

    return false;
}

function arrayMaxMin(arr){
    let novoArr = [];
    let numeroMaior = arr[0];
    let numeroMenor = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > numeroMaior) {
            numeroMaior = arr[i]
        }
        if(arr[i] < numeroMenor) {
            numeroMenor = arr[i]
        }
    }
    novoArr.push(numeroMenor, numeroMaior);

    return novoArr;
}
