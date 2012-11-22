/**
 * User: Robert Kehoe
 * Date: 22/11/12
 * Time: 21:33
 * Simple example controller to show how:
 *  - Add listener to the Oneline store to check for Store load() events, in order to copy the online data
 *  - Add listener to the Online Proxy to check for exceptions
 *  - Rebinds the view (newList) from the Online Store to the Offline store if an exception is thrown
 */

Ext.define('default.controller.Core', {
  extend : 'Ext.app.Controller',

  config : {
    refs    : {
      newsList   : '#newsList'
    }
  },

  /**
   * Sencha Touch always calls this function as part of the bootstrap process
   */
  init : function () {
    var onlineStore = Ext.getStore('News'),
      localStore = Ext.create('Ext.data.Store', {
        model: "default.model.Offline"
      }),
      me = this;

    localStore.load();

    /*
     * When app is online, store all the records to HTML5 local storage.
     * This will be used as a fallback if app is offline more
     */
    onlineStore.on('refresh', function (store, records) {

      // Get rid of old records, so store can be repopulated with latest details
      localStore.getProxy().clear();

      store.each(function(record) {

        var rec = {
          name : record.data.name + ' (from localStorage)' // in a real app you would not update a real field like this!
        };

        localStore.add(rec);
        localStore.sync();
      });

    });

    /*
     * If app is offline a Proxy exception will be thrown. If that happens then use
     * the fallback / local stoage store instead
     */
    onlineStore.getProxy().on('exception', function () {
      console.log(me.getNewsList());
      me.getNewsList().setStore(localStore); //rebind the view to the local store
      localStore.load(); // This causes the "loading" mask to disappear
      Ext.Msg.alert('Notice', 'You are in offline mode', Ext.emptyFn); //alert the user that they are in offline mode
    });

  }
});