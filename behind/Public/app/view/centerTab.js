/**
 * Created by Couputer on 2016/7/20.
 */
Ext.define("admin.view.centerTab",{
    extend:'Ext.tab.Panel',
    alias:'widget.centertab',
    border:0,
    bodyStyle:'padding:0px',
    id:'centertab',
    layout:'fit',
    items:[
        {
            title:'首页',
            icon:'assets/admin/images/icons/house.png',
            html:'首页内容',
            layout:'fit'
        }],

    initComponent:function(){

        this.callParent();

    }
})