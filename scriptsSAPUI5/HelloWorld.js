
// sap.ui.getCore().attachInit(function () {
// alert("SAPUI5 is ready");        });

sap.ui.getCore().attachInit(function () {
    var app = new sap.m.App("myApp", { initialPage: "page1" });
    // create the first page
    var page1 = new sap.m.Page("page1", {
        title : "Hello World",
        showNavButton : false,
        content : [
            new sap.m.Button({
                text : "Go to Page 2",
                press : function () {
                    // navigate to page2
                    app.to("page2");
                }
            }), 
            new sap.m.Button({
                text : "_Hello World",
                press : function () { 
                    alert("Hello World");
                }
            })
        
        ]
    });
    // create the second page with a back button
    var page2 = new sap.m.Page("page2", {
        title : "Hello Page 2",
        showNavButton : true,
        navButtonPress : function () {
            // go back to the previous page
            app.back();
        }
    });


    app.addPage(page1).addPage(page2);
    app.placeAt("content");
});