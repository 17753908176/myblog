Ext.onReady(function(){
//开启悬浮提示功能
Ext.QuickTips.init();
//开启动态加载
Ext.Loader.setConfig({
    enabled: true
});
Ext.application({
	name:'admin',
	controllers:['mainCtrl'],
    //指定配置选项，设置相应的路径  设置base
    appFolder: 'http://localhost/Public/app/',
	launch:function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			items:[{
				width:'100%',
				height:'100%',
				xtype:'mainlayout'
					
					}]	
		});
		
	}
});
})