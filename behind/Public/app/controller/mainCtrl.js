Ext.define('admin.controller.mainCtrl',{
	extend:'Ext.app.Controller',
	init:function(){
		this.control({
			//单击左侧树触发右侧Tab事件，同时向后台发送请求，请求数据url
			'treepanel':{
				itemclick:function(tree,  record,  item,  index,  e, eOpts){
					//获取中间Tab的组件
                    var centerTab=tree.up('mainlayout').down('centertab');
				   //单击用户管理节点，生成一个tab-grid表
					//找到这个节点
					var id=record.data['id'];
					if(id == 100){
                        this.add({
                            centerTab:centerTab,

                            Controller:'admin.controller.contentSendCtrl',

                            ViewXtype:'contentSend',

                            ViewName:'admin.view.tabPanel.contentSend'
                        })
					}
				}
			},
			// 展开全部
			'deptTree button[id=allopen]':{
				click:function (btn) {
                    var tree=  btn.findParentByType('deptTree');
					tree.expandAll();
				}
			},
			'deptTree button[id=allclose]':{
				click:function (btn) {
					var tree=  btn.findParentByType('deptTree');
					tree.collapseAll();
				}
			}
		});
		//生成resource   tab
		this.add=function(info){
			if(info){
				var centertab=info.centerTab;
				var Panel=centertab.down(info.ViewXtype);
				if(!Panel){
					this.application.getController(info.Controller);
					Panel=Ext.widget(info.ViewXtype);
					centertab.add(Panel)
				}
				centertab.setActiveTab(Panel);
			}

		};
	},
	views:['mainLayout','westView','centerTab'],
	stores:['treeStore'],
	models:[],
	initComponent:function () {
		this.callParent();
	}
})