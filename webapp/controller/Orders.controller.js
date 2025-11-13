sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.vodafone.salesorderlist.controller.Orders", {
            onInit: function () {
  /*              
                var jsonData = new sap.ui.model.json.JSONModel("./model/sales.json");
                this.getView().setModel(jsonData); // default model - no Name

                 var xmlData = new sap.ui.model.xml.XMLModel("./model/pur.xml");
                 this.getView().setModel(xmlData,"p"); // named model - "p"
  */  
                },
                
                onPressItems : function()
                {
                    // Triggers the respective Route
                    this.getOwnerComponent().getRouter().navTo("RouteItems");
                }

        });
    });
