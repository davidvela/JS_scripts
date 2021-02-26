
var i = 0;

function test(){
    //this.testCounter(); 
    this.SAP();
}
function testCounter(){
    i++;
    var str_test ="test:" + i ;
    console.log(str_test );
    document.getElementById("p1").innerHTML = str_test;

}
function Northwind(){
    const Http = new XMLHttpRequest();
    //const url='https://services.odata.org/Northwind/Northwind.svc/Products';
    const url='https://services.odata.org/Northwind/Northwind.svc/Products?$top=5&$format=json';
    Http.open("GET", url);
    Http.send();
    var p1 = document.getElementById("p1").innerHTML;
    Http.onreadystatechange = (e) => {
      //console.log(Http.responseText)
      if(Http.responseText != ""){
        var obj = JSON.parse(Http.responseText);
        console.log(obj)
        document.getElementById("p1").innerHTML = Http.responseText;
        for(var i in obj.value){ console.log(obj.value[i].ProductID) }

      }
    }
}

function SAP(){
    const Http = new XMLHttpRequest();
    const url='https://shhswddf1.global.schindler.com/sap/opu/odata/sap/YAC_HR_CONTR_ADD_SRV/thunderhead_pdfSet';
    username = 'VELATIDA'; 
    password = 'Hola226**666'; 
    
    // Http.open("GET", url, true, username,password);
    // Http.send();
    Http.onreadystatechange = (e) => {
      //console.log(Http.responseText)
      
    }

    $.ajax({
        url: url,
        headers: {"Authorization": "Basic " + btoa(username + ":" + password),
                  'Content-Type': 'application/x-www-form-urlencoded'},
        type: "GET", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {
        },
        success: function (result) {
            console.log(result);
        },
        error: function () {
            console.log("error");
        }
    });

}



