Ext.define('admin.controller.contentSendCtrl',{
    extend:'Ext.app.Controller',
    init:function() {
            this.control({
                //弹出window
                'contentSend button[action=add]':{
                    click:function () {
                        Ext.widget('formWin')
                    }
                },
                //表单提交
                'formWin button[action=submit]':{
                    click:function () {
                        var form =  Ext.getCmp('contentForm').getForm();
                        var values = form.getValues();
                        console.log(values);
                        if(form.isValid()){
                            Ext.Ajax.request({
                                method:"POST",
                                url: $.baseUrl()+'/index.php/Home/Article/addArticle',
                                params:{
                                    classify:values.classify,
                                    title: values.title,
                                    resume: values.resume,
                                    author:values.author,
                                    content:values.content
                                },
                                success: function(response,options){
                                    var resp = Ext.JSON.decode(response.responseText);
                                    if( resp.success){
                                        Ext.MessageBox.alert('提示',resp.message);
                                        Ext.getCmp('contentSendPanel').getStore().reload();
                                    }
                                },
                                failure: function(){
                                    Ext.MessageBox.alert('状态','提交失败');
                                }
                            })
                        }else{
                            Ext.MessageBox.alert('提示','字段不能为空')
                        }

                    }
                },
                //删除
                'gridpanel button[action=delete]':{
                    click:function () {
                        var record = Ext.getCmp('contentSendPanel').getSelectionModel().getSelection()[0];

                        if(record){
                            var data =record.data;
                            Ext.MessageBox.confirm('提示','是否删除',function (btn) {
                                if(btn == 'yes'){
                                    Ext.Ajax.request({
                                        method:"POST",
                                        url:$.baseUrl()+'/index.php/Home/Article/deleteArticleById',
                                        params:{
                                            id:data.id
                                        },
                                        success: function(response,options){
                                            var resp = Ext.JSON.decode(response.responseText);
                                            if(resp.success){
                                                Ext.MessageBox.alert('提示',resp.message)
                                            }

                                        },
                                        failure: function(){

                                        }
                                    });
                                }

                            })
                        }else{
                            Ext.MessageBox.alert('提示','请选择记录')
                        }




                    }
                }
            })
        },
    views:['tabPanel.contentSend','window.formWin'],
    stores:['contentSendStore'],
    models:[],
    initComponent:function () {
        this.callParent();
    }
})