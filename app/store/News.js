/**
 * User: Robert Kehoe
 * Date: 22/11/12
 * Time: 20:35
 * Online store to store retrieve and manage data
 */

Ext.define('default.store.News', {
  extend:'Ext.data.Store',


  config:{
    model:'default.model.Online',
    proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://example.org/data/news.json' // Sample URL that simulates offline mode. Example.org does not allow cross-domain requests so this will always fail
    },
    autoLoad: true
  }
});