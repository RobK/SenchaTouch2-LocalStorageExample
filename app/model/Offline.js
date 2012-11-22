/**
 * Created with IntelliJ IDEA.
 * User: kehoro
 * Date: 22/11/12
 * Time: 20:22
 * To change this template use File | Settings | File Templates.
 */

Ext.define('default.model.Offline', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'name'
    ],
    identifier:'uuid', // needed to avoid console warnings!
    proxy: {
      type: 'localstorage',
      id  : 'news'
    }
  }
});