/**
 * User: Robert Kehoe
 * Date: 22/11/12
 * Time: 20:22
 * Use Sencha Touch inbuilt WebStorage API to persist data to the users browser
 */

Ext.define('default.model.Offline', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'name'
    ],
    identifier:'uuid', // IMPORTANT, needed to avoid console warnings!
    proxy: {
      type: 'localstorage',
      id  : 'news'
    }
  }
});