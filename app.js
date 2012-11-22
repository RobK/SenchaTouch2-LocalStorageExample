/**
 * User: Robert Kehoe
 * Date: 22/11/12
 * Time: 20:21
 *
 * A sample application to demonstrate how localstorage can work in Sencha Touch 2.1 applications to provide
 * a fallback / offline mode for mobile applications.
 * Works for mobile browsers (example: Safari) and for PhoneGap apps (Cordova).
 * Note: There is a known issue in iOS 5.1 that prevents localstorage from working. This is an iOS / Apple issue.
 *
 * Most of this code is just boiler plate stuff. The more interesting code is in:
 *  - app/controller/core.js
 *  - app/model/Offline.js
 *  - app/store/News.js
 *
 * A more detailed explanation is available at: http://www.robertkehoe.com/2012/11/sencha-touch-2-localstorage-example/
 */

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'default': 'app'
});
//</debug>

Ext.application({
    name: 'default',

    requires: [
        'Ext.MessageBox',
        'Ext.TitleBar'
    ],

    models : ['Offline', 'Online'],
    views: ['Main'],
    controllers : ['Core'],
    stores : ['News'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('default.view.Main'));

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
