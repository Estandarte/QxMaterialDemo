/**
 * Main application class of "QxMaterialDemo".
 *
 * @asset(qxmaterialdemo/*)
 */
qx.Class.define("qxmaterialdemo.Application", {
    extend: qx.application.Standalone,
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

            // Create a button
            var button1 = new qx.ui.form.Button("First Button");

            // Document is the application root
            var doc = this.getRoot();

            // Add button to document at fixed coordinates
            doc.add(button1, {
                left: 100,
                top: 50
            });

            // Add an event listener
            button1.addListener("execute", function(e) {
                alert("Hello World!");
            });
        }
    }
});
