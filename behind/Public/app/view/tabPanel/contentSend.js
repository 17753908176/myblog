Ext.define("admin.view.tabPanel.contentSend",{
    extend:'Ext.panel.Panel',
    alias:'widget.contentSend',
    title:'内容发布',
    closable:true,
    layout:'fit',
    height:'100%',
    items:[
        {

            xtype:'gridpanel',
            id:'contentSendPanel',
            store:'contentSendStore',
            columns: [
                { header: '分类',  dataIndex: 'classify' },
                { header: '标题', dataIndex: 'title'},
                { header: '作者', dataIndex: 'author' },
                { header: '概要', dataIndex: 'resume',flex: 1 }
            ],
            dockedItems:[{
                pack: 'center',
                xtype:'toolbar',
                items:[
                    {
                        text:'添加',
                        action:'add'
                    },
                    {
                        text:'删除',
                        action:'delete'
                    }
                    ]
            }
            ],

        }
    ]

})