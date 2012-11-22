Ext.define('default.view.Main', {
  extend : 'Ext.List',
  alias  : 'widget.mainscreen',

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
