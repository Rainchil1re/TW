export const UtilsFun = {
  getSubStr(str) {
    let strStart = '';
    let strEnd = '';
    let newStr = '';
    if (str && str.length > 5) {
      strStart = str.substr(0, 2);
      newStr = `${strStart}...`;
    } else {
      newStr = str;
    }
    return newStr;
  },
}
