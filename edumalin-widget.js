(function () {
  "use strict";

  var widget = model.widgets.findWidget("edumalin-widget");

  http()
    .get("/appregistry/edumalin/widget")
    .done(function (res) {
      var data = res.data;
      widget.data = data;
      model.widgets.apply();
    });
})();
