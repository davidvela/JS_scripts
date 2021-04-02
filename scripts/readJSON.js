//const dataPath = '../data/'
const dataPath = '../../../../__data/JSON/'
const exportPath = '../../../__data/JSON/'

const oJSON = require(dataPath+'sample.json');

var ls_json = JSON.stringify(oJSON)
// console.log(oJSON)
console.log(ls_json)

const fs = require('fs');
var json2xls = require('json2xls');
const filename = exportPath + 'sample2.xlsx';

var convert = function () {
  var xls = json2xls(oJSON);
  fs.writeFileSync(filename, xls, 'binary', (err) => {
     if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}

convert();
