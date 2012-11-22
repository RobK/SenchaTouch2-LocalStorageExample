/**
 * Created with IntelliJ IDEA.
 * User: kehoro
 * Date: 22/11/12
 * Time: 21:33
 * To change this template use File | Settings | File Templates.
 */

Ext.define('default.controller.Core', {
  extend : 'Ext.app.Controller',

  config : {
    refs    : {
      newsList   : '#newsList'
    }
  },

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