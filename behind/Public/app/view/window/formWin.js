Ext.define("main.view.window.formWin",{
    extend:'Ext.window.Window',
    alias:'widget.formWin',
    title:'发布内容',
    collapsible:true,
    maximizable:false,//不允许窗口最大化
    draggable :true,
    resizable:true,
    autoShow: true,
    width:'60%',
    height:'60%' ,
    buttonAlign:'center',
    layout:'fit',
    modal:true,
    items:[
        {
            xtype:'form',
            id:'contentForm',
            layout: 'column', // arrange fieldsets side by side
            bodyPadding: 30,
            height:'100%',
            items: [{
                // Fieldset in Column 1 - collapsible via toggle button
                xtype:'fieldset',
                columnWidth: 1,
                title: '配置',
                collapsible: true,
                defaultType: 'textfield',
                defaults: {anchor: '100%'},
                layout: 'anchor',
                items :[
                    {
                        fieldLabel: '分类',
                        name: 'classify'
                    },
                    {
                        fieldLabel: '标题',
                        name: 'title'
                    },
                    {
                        fieldLabel: '作者',
                        name: 'author'
                    },
                    {
                        fieldLabel: '概要',
                        name: 'resume'
                    }/*,
                    {
                        xtype:'datefield',
                        fieldLabel: '发布日期',
                        name: 'resume',
                        format:'Y:m:d'
                    }*/

                ]
            },
                {
                // Fieldset in Column 2 - collapsible via checkbox, collapsed by default, contains a panel
                xtype:'fieldset',
                title: '内容', // title or checkboxToggle creates fieldset header
                columnWidth: 1,
                checkboxToggle: true,
                collapsed: true, // fieldset initially collapsed
                layout:'anchor',
                items :[{
                    xtype: 'htmleditor',
                    name:'content',
                    bodyPadding:15
                }]
            }]

        }],
    buttons:[
        {
            text:'提交',
            action:'submit'
        }
        ],
    initComponent:function () {


        this.callParent(arguments);
    }

})