sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "UI5.demo.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
