Ext.define("admin.store.treeStore",{
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    root: {
        expanded: true,
        children: [
            { text: "内容发布", expanded: true, id:'100'},
       /*     { text: "产品概况", expanded: true,id:'200', children: [
                    { text: "购买分析", leaf: true,id:'201',},
                    { text: "流量分析", leaf: true,id:'202',},
                    { text: "趋势分析", leaf: true,id:'203',},
                    { text: "关键分析", leaf: true,id:'204',}
                ] },*/
        ]
    }
});