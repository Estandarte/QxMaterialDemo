/**
 * Main application class of "QxMaterialDemo".
 */
qx.Class.define("qxmaterialdemo.Application", {
    extend: qxm.Application,
    // extend: qxm.application.Standalone,
    members: {
        /**
         * This method contains the initial application code and gets called
         * during startup of the application
         *
         * @lint ignoreDeprecated(alert)
         */
        main: function() {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Environment.get("qx.debug")) {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
            }

            /* Enable context menu */
            qx.core.Init.getApplication().getRoot().setNativeContextMenu(true);
            var root = this.getRoot();
            // Document is the application root
            var doc = new qxm.ui.container.Composite(new qxm.ui.layout.VBox());
            root.add(doc, {top: 0, left: 0, bottom: 0, right: 0});

            // Create a button
            var textfield = new qxm.ui.form.MTextField().set({label: 'First Text'});
            doc.add(textfield);

            // Create a button
            var button = new qxm.ui.form.Button("First Button");
            button.addListener("execute", function(e) {
                componentHandler.upgradeDom();
                alert("Hello World!");
            });
            doc.add(button);
            componentHandler.upgradeDom();

        }
    }
});
