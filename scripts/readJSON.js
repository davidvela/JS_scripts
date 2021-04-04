//const dataPath = '../data/'
const dataPath = '../../../../__data/JSON/'
const exportPath = '../../../__data/JSON/'

fname = 'sample'

const oJSON = require(dataPath+fname+'.json');

var ls_json = JSON.stringify(oJSON)
// console.log(oJSON)
// print JSON file: 
console.log(ls_json)

const fs = require('fs');

// convert JSON to excel
var json2xls = require('json2xls');
const filename = exportPath + fnanem + '.xlsx';
var convertJSON2XLSX = function () {
  var xls = json2xls(oJSON);
  fs.writeFileSync(filename, xls, 'binary', (err) => {
     if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}


// main -- call functions: 
// convertJSON2XLSX();
