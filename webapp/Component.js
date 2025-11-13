/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/vodafone/salesorderlist/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.vodafone.salesorderlist.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
            
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

/*
                var jsonData = new sap.ui.model.json.JSONModel("./model/sales.json");
                this.setModel(jsonData); // default model - no Name

                 var xmlData = new sap.ui.model.xml.XMLModel("./model/pur.xml");
                 this.setModel(xmlData,"p"); // named model - "p"
*/
            }
        });
    }
);