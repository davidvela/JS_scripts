// https://betterprogramming.pub/convert-json-to-xlsx-file-in-javascript-e7611a975916
// npm install express --save
// npm install json2xls --save

//convert.js
var dataPath = '../data/'
// const dataPath = '../../../../__data/JSON/'

const exportPath = 'data/'
//const exportPath = '../../../__data/JSON/'

const allUsers = require(dataPath+'sample.json');
const fs = require('fs');
const app = require('express')();
var json2xls = require('json2xls');
const filename = dataPath + 'sample.xlsx';
app.listen(5050, () => {
  console.log("app is running on port 5050");
  convert();
})
var convert = function () {
  var xls = json2xls(allUsers);
  fs.writeFileSync(filename, xls, 'binary', (err) => {
     if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}
