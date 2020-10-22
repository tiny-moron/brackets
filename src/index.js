module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  var checkk = false;
  if(str.length % 2 != 0) return false;
  for(let n = 0; n < str.length; n++) {
    if(str[n] === true) continue;
    for(let m = 0; m < bracketsConfig.length; m++) {
      if(str[n] === bracketsConfig[m][0]) {
        for(let l = n + 1; l < str.length; l += 2) {
          if(str[l] === bracketsConfig[m][1]) {
            str[n] = true;
            str[l] = true;
            checkk = true;
            break;
          }
        }
      }
    }
    if(!(checkk)) return false;
    checkk = false;
  }
  return true;
}
