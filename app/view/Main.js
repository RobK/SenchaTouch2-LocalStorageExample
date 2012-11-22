/**
 * User: Robert Kehoe
 * Date: 22/11/12
 * Time: 20:21
 * A very simple view, just to show a list of names of news articles. About as simple as it gets!
 */

Ext.define('default.view.Main', {
  extend : 'Ext.List',

  config : {
    id               : 'newsList',
    store            : 'News',
    disableSelection : false,
    itemTpl          : Ext.create('Ext.XTemplate',
      '{name}'
    ),
    items            : {
      docked : 'top',
      xtype  : 'titlebar',
      title  : 'News List'
    }
  }
});
