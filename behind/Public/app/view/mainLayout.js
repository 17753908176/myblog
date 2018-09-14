Ext.define("admin.view.mainLayout",{
	extend:'Ext.panel.Panel',
	alias:'widget.mainlayout',
	defaults:{
		bodyStyle:'padding 1px'		
	},
	layout:'border',
	
	items:[
	       {
	    	   region:'north',
			   height:'15%',
			   html:'<center><h1>后台管理</h1></center>'
	       },
	       {
			   title:'导航栏',
			   titleAlign:'center',
			   split:true,
			   region:'west',
			   width:190,
			   minWidth:190,
			   maxWidth:300,
			   xtype:'panel',
			   collapsible:true,
			   id:'west-tree',
			   layout:'fit',
			   items:[
			   	{
			   		xtype:'treepanel',
					id:'deptTree',
                    rootVisible:false,
                    store:'treeStore',
                    dockedItems:[{
                        pack: 'center',
                        xtype:'toolbar',
                        items:[{
                            // xtype:'button',
                            id:'allopen',
                            text:'展开全部',
                            icon:'assets/admin/images/icons/add.png'
                        },{
                            //xtype:'button',
                            id:'allclose',
                            text:'收起全部',
                            icon:'assets/admin/images/icons/delete.png'
                        }]
                    }
                    ],
				}
				]
	       },
	       {
	    	   region:'center',
			   //split:true,
	    	   xtype:'panel',
	    	   id:'caenter-tb',
			   layout:'fit',
	    	   items:[
	    	          {
	    	        	id:'dept-tab',
	    	        	xtype:'centertab'
	    	          }
	    	          ]
	    	   
	       }
	]
	
});