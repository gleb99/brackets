module.exports = function check(str, bracketsConfig) {
    let strN = str;
  if (str.length % 2 === 0) {
    for (let i = 0; i <= str.length / 2; i++) {
  
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (str.match(/\d/)) {
        let left = bracketsConfig[i][0];
        let right = bracketsConfig[i][1];
        let summ = left + right;
       if (strN.match(new RegExp(summ))!== null) {
       strN =  strN.replace(new RegExp(summ), '');
      }
    } else { 
      let left = "\\" + bracketsConfig[i][0];
      let right ="\\" + bracketsConfig[i][1];
      let summ = left + right;
      if (strN.match(new RegExp(summ))!== null) {
      strN =  strN.replace(new RegExp(summ), '');
        }
       }
      }
    }
    if (strN === '') {
      return true;
    } else {
      return false;
    }
  } else { return false};
}
